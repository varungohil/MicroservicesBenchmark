require "socket"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()

request = function()
  local profs = {'David Albonesi', 'Khurram Afridi', 'Aaron Wagner', 'Kirstin Petersen', 'Joseph Skovira', 'Alyssa Apsel', 'Adam Bojanczyk', 'Elizabeth Helbling', 'David Hysell', 'Christoph Studer', 'Ronald Kline', 'Jose Martinez', 'Anthony Reeves', 'Charles Seyler', 'Cindy Kao', 'Gookwon "Edward" Suh', 'Ao Tang', 'Peter Jessel', 'C. Lindsay Anderson', 'Silvia Ferrari', 'Adrian Sampson', 'Mark Campbell', 'Harold Craighead', 'Fengqi You', 'David Erickson', 'Joseph Halpern', 'Michel Louge', 'Yudong Chen', 'Zygmunt Haas', 'Michael Kelley', 'Douglas Long', 'Rajit Manohar', 'Michael Spencer', 'Tsuhan Chen', 'Dieter Ast', 'Carl Batt', 'K Bingham Cady', 'Vaclav Kostroun', 'Andrew Myers', 'Ashutosh Saxena', 'Emin Gun Sirer', 'Ramin Zabih', 'Qing Zhao', 'Volodymyr Kuleshov', 'Gennady Shvets', 'Thomas Cleland', 'James Shealy', 'Christopher Batten', 'Vikram Krishnamurthy', 'Park Doing', 'Francesco Monticone', 'David Delchamps', 'Carl Poitras', 'Farhan Rana', 'David Hammer', 'Jayadev Acharya', 'Stephen Wicker', 'Hsiao-Dong Chiang', 'Alyosha Molnar', 'Debdeep Jena', 'Christina Delimitrou', 'Eilyan Bitar', 'Edwin Kan', 'Bruce Land', 'Francesca Parise', 'David Schneider', 'Zhiru Zhang', 'Nils Napp', 'Mert Sabuncu', 'Clifford Pollock', 'Amit Lal', 'Lang Tong', 'Peter Doerschuk', 'Bruce Johnson'}
  local prof_id = math.random(1, #profs)
  
  tokens = string.gmatch(profs[prof_id], "[^%s]+")
  local args = tokens() .. "%20" .. tokens()
  local method = "GET"
  local headers = {}
--   headers["Content-Type"] = "application/x-www-form-urlencoded"
  local path = "http://localhost:5000//wrk2-api/prof?name=" .. args
  return wrk.format(method, path, headers, nil)
end
