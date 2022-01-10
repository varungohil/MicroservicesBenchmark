from selenium import webdriver
from bs4 import BeautifulSoup
import pymongo
import json
import pprint
import urllib.request
import time
import requests
import random
from concurrent import futures
import csv
import grpc

from classList_pb2 import (
    classListRequest,
    classListResponse,
    Class, 
    Section, 
    Time,
)
import classList_pb2_grpc
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.trace.export import BatchSpanProcessor

provider = TracerProvider(resource=Resource.create({SERVICE_NAME: "classlist"}))
trace.set_tracer_provider(provider)
jaeger_exporter = JaegerExporter(
    agent_host_name="jaeger-agent",
    agent_port=6831,
)
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(jaeger_exporter)
)
tracer = trace.get_tracer(__name__)
# from jaeger_client import Config
# config = Config(
#     config={ # usually read from some yaml config
#         'sampler': {
#             'type': "const",
#             'param': 1,
#         },
#         'local_agent': {
#             'reporting_host': 'jaeger-agent',
#             'reporting_port': '6831',
#         }
#     },
#     service_name='classlist',
# )
# tracer = config.initialize_tracer()

client = pymongo.MongoClient("classlist_db",27017)
# client = pymongo.MongoClient("localhost",27018)
db = client.classlist
TOTAL_ECE_CLASSES=114
#------------------------------------------------------
outfile = csv.writer(open("class.csv", "w", encoding='utf-8'))
outfile.writerow(['index', 'title', 'number', 'description'])
outfile_codes = []
ofindex = 0
#-------------------------------------------------------

class classlistService(
    classList_pb2_grpc.classlistServicer
):
    def getClassList(self, request, context):
        with tracer.start_as_current_span('getClassList') as span:
            print("Inside getClassList - " + request.year)
            span.set_attribute("year", request.year)
            classes = []
            with tracer.start_as_current_span('classlist_db-getClassList') as spandb:
                spandb.set_attribute("year", request.year)
                if request.year == "all":
                    dblist = db.classInfo.find({})
                else:
                    dblist = db.classInfo.find({"year":request.year})
            for class_ in dblist:
                sections = [] 
                for section_ in class_['course_info']:
                    temp_section = {}
                    temp_section['title'] = section_['section']
                    temp_section['number'] = section_['class_numbers']
                    temp_section['instructors'] = section_['instructors']
                    temp_section['days'] = section_['days']
                    times = section_['times'].split(" ")
                    temp_section['times'] = {'start': times[0], 'end': times[-1] }
                    sections.append(
                        Section(title=temp_section['title'],number=temp_section['number'], 
                        instructors=temp_section['instructors'], days=temp_section['days'], 
                        times=temp_section['times']
                    ))

                classes.append(Class(title=class_['titles'],code=class_['course_code'], 
                        subject=class_['subject'], nbr=class_['nbr'], credit=str(class_['credit']), description=class_['description'], sections=sections, recommendation=class_['recommendation']
                    ))

            return classListResponse(classes=classes)

# loads only spring 21 classes

# base_url = "https://classes.cornell.edu/browse/roster/SP21/class/ECE/"
# page = urllib.request.urlopen("https://classes.cornell.edu/browse/roster/SP21/subject/ECE")
# soup = BeautifulSoup(page,'html.parser')

titles = []
instructors = []
section = []
course_code = [] # ECE 120
descriptions = []
data_catalog_nbr = [] # number part 1210
data_subject = [] # subject field ECE
class_numbers = [] # unique number 34343
credit = [] # 3 credits
times = [] # 6-9
days = [] # M-W
years = []

def init_credits(year): 
    # hard coding credits as I had difficulty grabbing the data
    if (year  == "SP21"):
        for x in range(54):
            if (x==0 or x==7 or x==9 or x==13 or x==15 or x==19 or x==23 or x==30 or x==31 or x==32 or x==34 or x==39):
                credit.append(3)
            else:
                credit.append(4)
    if (year == "FA21"):
        for x in range(62):
            if (x==2 or x==4 or x==10 or x==21 or x==24 or x==31 or x==34 or x==35 or x==36 or x==40 or x==41 or x==52 or x == 54 or x == 59):
                credit.append(3)
            elif (x == 23 or x == 25 or x == 28 or x == 53 or x == 57 or x == 60):
                credit.append(1)
            else:
                credit.append(4)  

# def scrape_num_class():
#     node = soup.find_all('div',attrs={'id': 'class-subject-listing'})[0]
#     num = node.select("p > span")[0]
#     return int(num.string)

def scrape_classes(year):
    print("Inside scrape classes")
    init_credits(year)
    base_url = "https://classes.cornell.edu/browse/roster/" + year + "/subject/ECE/"
    print(base_url)
    page = urllib.request.urlopen(base_url)
    soup = BeautifulSoup(page,'html.parser')


    node = soup.find_all('div',attrs={'id': 'class-subject-listing'})[0]
    num = node.select("p > span")[0]
    num_classes = int(num.string)
    # global TOTAL_ECE_CLASSES
    # TOTAL_ECE_CLASSES += num_classes

    i = 0
    for node in soup.find_all('div',attrs={'role': 'region'}):
        i+=1
        if ( i > num_classes ):
            break
        if ( node.find(class_="secondary-section" ) ):
            continue
        code = node['aria-label'][7:len(node['aria-label'])] # ECE 1210
        subject = node['aria-label'][7:10] # ECE
        nbr = node['aria-label'][11:15] # 1210
        new_url = "https://classes.cornell.edu/browse/roster/" + year + "/class/ECE/" + nbr
        new_page = urllib.request.urlopen(new_url)
        new_soup = BeautifulSoup(new_page,'html.parser')
        description = new_soup.find('p',class_='catalog-descr').text.strip()
        descriptions.append(description)
        # print(description)
        course_code.append(code)
        data_subject.append(subject)
        data_catalog_nbr.append(nbr)
        years.append(year)



        title = []
        for titl in node.select("h3 > div[class='title-coursedescr'] > a"):
            title.append(titl.string)
            #print(titl.string)
        titles.append(title)

        #----------
        global ofindex
        # if nbr not in outfile_codes:
        outfile.writerow([ofindex, title[0], nbr, description])
        outfile_codes.append(nbr)
        ofindex += 1
        # outfile.writerow(f"{ofindex},{title[0]},{nbr},'{description}'\n")
        
        #----------

        section_1 = []
        class_number = []
        instructor = []
        time = []
        day = []
        for sec in  node.find_all("ul", {"class": "section"}):
            section_1.append(sec['aria-label'][14:len(sec['aria-label'])])

            for inst in sec.find_all("li", {"class" : "instructors"}):
                instructor.append(inst.find("span")["data-content"])

            for tim in sec.find_all("time", {"class" : "time"}):
                try:
                    time.append(tim.text)
                except:
                    time.append("NA")
            
            for da in sec.find_all("span", {"class" : "pattern-only"}):
                day.append(da.find("span").text)

            for cn in sec.find_all("li", {"class":"class-numbers"}):
                class_number.append(cn.find("strong")["data-content"])

        class_numbers.append(class_number)
        days.append(day)
        section.append(section_1)
        times.append(time)
        instructors.append(instructor)
    for i in range(len(section)):
        if len(times[i]) != len(section[i]):
            print(times[i])
            diff = len(section[i]) - len(times[i])
            for j in range(diff):
                times[i].append("NA")
    # print(len(titles))
    # print(len(class_numbers))
    # print(len(days))
    # print(len(times))
    print("#----------------------")
    print(instructors)
    print("#----------------------")
    # print(len(section))


'''
    classlist:
        -> classInfo: all the classes with their info 
        -> classCounts: the latest number of classes pulled from the site. 
'''
def update_db(): # insert into db
    recommend = csv.DictReader(open("recommend.csv", mode='r', encoding='utf-8-sig'))
    print(years)
    # for j in range(0,TOTAL_ECE_CLASSES):
    for j, title in enumerate(recommend):
    # for j in range(len(years)):
        data = {}
        data["year"] = years[j]
        data["titles"] = titles[j][0]
        data["course_code"] = course_code[j]
        data["subject"] = data_subject[j]
        data["nbr"] = data_catalog_nbr[j]
        data["credit"] = credit[j]
        data["description"] = descriptions[j]
        course_info = []
        for k in range(0,len(section[j])):
            # print(j)
            # print(k)
            new_course = {}
            new_course["section"] = section[j][k]
            new_course["class_numbers"] = class_numbers[j][k]
            new_course["days"] = days[j][k]
            new_course["instructors"] = instructors[j][k]
            # print(new_course)
            # print(times[j])
            # print(section[j])
            new_course["times"] = times[j][k] if ( len(times[j]) >= k-1 ) else "None"
            course_info.append(new_course)
        data["course_info"] = course_info
        data["size"] = 50
        data["recommendation"] = title["recommendation"]
        db.classInfo.insert_one(data)    
    
    # insert the total number of classes 
    db.classCounts.insert_one({'count': len(data_subject)})

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    classList_pb2_grpc.add_classlistServicer_to_server(
        classlistService(), server
    )
    server.add_insecure_port("0.0.0.0:5002")
    print("Starting Server")
    server.start()
    print("Waiting...")
    server.wait_for_termination()

if __name__ == "__main__":
    if ( db.classCounts.find_one({})["count"] != TOTAL_ECE_CLASSES ):
        # Always reset 
        db.classInfo.delete_many({})
        db.classCounts.delete_many({})
        # Run 
        scrape_classes("SP21")
        scrape_classes("FA21")
        update_db()
    print(TOTAL_ECE_CLASSES)
    print("Serving")
    serve()