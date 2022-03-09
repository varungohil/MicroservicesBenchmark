# from selenium import webdriver
from bs4 import BeautifulSoup
import pymongo
# from sklearn.feature_extraction.text import CountVectorizer
# import matplotlib.pyplot as plt
from concurrent import futures
import urllib.request
import requests
import csv
import numpy as np
import grpc
import random
from concurrent import futures
from prof_links import *
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.trace.propagation.tracecontext import TraceContextTextMapPropagator

provider = TracerProvider(resource=Resource.create({SERVICE_NAME: "prof"}))
trace.set_tracer_provider(provider)
exporter = OTLPSpanExporter(endpoint="http://otel-collector:4317")
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(exporter)
)
tracer = trace.get_tracer(__name__)





from prof_pb2 import (
    profRequest,
    profResponse,
    profListRequest,
    profListResponse,
    Professor,
)
import prof_pb2_grpc

client = pymongo.MongoClient("prof_db",27017)
db = client.prof

class profService(
    prof_pb2_grpc.profServicer
):
    def getProf(self, request, metadata):
        ctx = TraceContextTextMapPropagator().extract(dict(metadata.invocation_metadata()))
        with tracer.start_as_current_span("getProf", context = ctx) as span:
            prof_ = db.profInfo.find_one({'name': request.name})
            span.set_attribute("prof_name", request.name)
            return profResponse(prof=Professor(name=prof_['name'],rating=prof_['rating'], 
                        wouldTakeAgain=prof_['would_take_again'], levelOfDifficulty=prof_['level_of_difficulty'], topTags=prof_['top_tags'], reviews=prof_['reviews'], numReviews=prof_['num_reviews']))
    
    def getProfList(self, request, metadata):
        ctx = TraceContextTextMapPropagator().extract(dict(metadata.invocation_metadata()))
        with tracer.start_as_current_span("getProfList", context = ctx) as span:
            profs = []
            for prof_ in db.profInfo.find({}):
                profs.append(Professor(name=prof_['name'],rating=prof_['rating'], 
                        wouldTakeAgain=prof_['would_take_again'], levelOfDifficulty=prof_['level_of_difficulty'], topTags=prof_['top_tags'], reviews=prof_['reviews'], numReviews=prof_['num_reviews']))
            return profListResponse(profs=profs)

base_url = "https://www.ratemyprofessors.com/"

def scrape_profs():
    csv_file = open("prof.csv", "w", encoding='utf-8')
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['name', 'rating', 'wouldTakeAgain', 'levelOfDifficulty', 'topTags', 'similarProfs', 'reviews', 'numReviews'])

    # br = webdriver.Firefox()

    url_list = prof_list
    for url in url_list:
        # br.get(url)
        page = urllib.request.urlopen(url)
        soup = BeautifulSoup(page, "html.parser")

        try:
            name = soup.find('div', class_="NameTitle__Name-dowf0z-0 cfjPUG").text.strip()
        except:
            name = "N/A"

        try:
            rating = soup.find('div', class_="RatingValue__Numerator-qw8sqy-2 liyUjw").text.strip()
        except:
            rating = "N/A"

        try:
            would_take_again = soup.findAll('div', class_="FeedbackItem__FeedbackNumber-uof32n-1 kkESWs")[0].text
        except:
            would_take_again = "N/A"
        
        try:
            level_of_difficulty = soup.findAll('div', class_="FeedbackItem__FeedbackNumber-uof32n-1 kkESWs")[1].text
        except:
            level_of_difficulty = "N/A"

        try:
            top_tags = soup.findAll('span', class_="Tag-bs9vf4-0 hHOVKF")
            top_tags = [tag.text.strip() for tag in top_tags]
            top_tags = '; '.join(set(top_tags))
        except:
            # top_tags = []
            top_tags = ""

        try:
            similar_profs = []
            similar_profs_ul = soup.find('ul', class_="SimilarProfessors__StyledSimilarProfessorsList-zg1hrt-1 byOnik")
            similar_profs_li = similar_profs_ul.findAll('li')
            for prof in similar_profs_li:
                href = base_url + prof.find('a')['href']
                prof_rating = prof.findAll('span')[0].text
                prof_name = prof.findAll('span')[1].text
                similar_prof = []
                similar_prof.append(prof_rating)
                similar_prof.append(prof_name) 
                similar_prof.append(href)
                similar_profs.append(similar_prof)
        except:
            similar_profs = []              

        try:
            reviews_lst = soup.findAll('div', class_="Comments__StyledComments-dzzyvm-0 gRjWel")[1:]
            stripped_reviews_lst = [r.text.strip() for r in reviews_lst]
            reviews = '; '.join(stripped_reviews_lst)
            num_reviews = len(reviews_lst)
        except:
            reviews = "N/A"
            num_reviews = 0

        csv_writer.writerow([name, rating, would_take_again, level_of_difficulty, top_tags, similar_profs, reviews, num_reviews])

    csv_file.close()
    return stripped_reviews_lst

# def get_terms_and_TFs(data):
#     # TODO: improve on getting rid of useless common words such as class, prof. 
#     # current way is to set a max ratio threshold like .8 with scope per prof
#     # need to incorporate global info
#     vectorizer = CountVectorizer(stop_words='english')
#     doc_term_TF_matrix = vectorizer.fit_transform(data).toarray()
#     term_doc_TF_matrix = doc_term_TF_matrix.T

#     # TF <=> term frequency <=> number of documents each term is in
#     terms_TF = np.sum(term_doc_TF_matrix, axis=1)
#     terms = vectorizer.get_feature_names()
#     num_docs = len(data)
#     terms_TF_lst = terms_TF.tolist()
#     useful_terms = [terms[i] for i in range(num_docs) if terms_TF_lst[i] < 0.5 * num_docs]
#     return (useful_terms, terms_TF[terms_TF < 0.5 * num_docs])

# def produce_plot(data, terms, terms_TF):
#     terms_terms_TF_tuple = list(zip(terms, terms_TF))
#     terms_terms_TF_tuple_sorted = sorted(terms_terms_TF_tuple, key=lambda x: -x[1])
 
#     num_top_terms = 20
#     # reverse the array so bars are from longest to shortest in the plot
#     top_terms_and_term_counts = terms_terms_TF_tuple_sorted[:num_top_terms][::-1]
#     top_term_counts = [term_and_count[1] for term_and_count in top_terms_and_term_counts]
#     top_terms = [term_and_count[0] for term_and_count in top_terms_and_term_counts]

#     # TODO: store and render plot in prof's page
#     plt.rc('ytick', labelsize=5)
#     plt.barh(top_terms, top_term_counts)
#     plt.xlabel("Term Frequency")
#     plt.ylabel("Top Terms")
#     plt.title("RateMyProfessor Rating Comment Term Frequencies of the Top " + str(num_top_terms) + " Terms")
#     plt.show()
#     return top_terms

'''
    proflist:
        -> profInfo: all the professors with their info 
        -> profCounts: the latest number of profs pulled from the site. 
'''
def update_db():
    profs = csv.DictReader(open("prof.csv", mode='r', encoding='utf-8-sig'))
    count = 0
    for prof in profs:
        count += 1
        data = {}
        data["name"] = prof["name"]
        data["rating"] = prof["rating"]
        data["would_take_again"] = prof["wouldTakeAgain"]
        data["level_of_difficulty"] = prof["levelOfDifficulty"]
        data["top_tags"] = prof["topTags"]
        data["similar_profs"] = prof["similarProfs"]
        data["reviews"] = prof["reviews"]
        data["num_reviews"] = prof["numReviews"]
        db.profInfo.insert_one(data)
    db.profCounts.insert_one({"count": count})
    

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    prof_pb2_grpc.add_profServicer_to_server(
        profService(), server
    )
    server.add_insecure_port("0.0.0.0:5004")
    print("Starting server")
    server.start()
    print("waiting...")
    server.wait_for_termination()

if __name__ == "__main__":
    TOTAL_ECE_PROFS=74 # Hard coded for now cause not all prof has a RMP page
    if ( db.profCounts.find_one({})["count"] != TOTAL_ECE_PROFS ):
        db.profInfo.delete_many({}) # Always reset 
        db.profCounts.delete_many({}) # Always reset 
        scrape_profs()
        update_db()
    serve()