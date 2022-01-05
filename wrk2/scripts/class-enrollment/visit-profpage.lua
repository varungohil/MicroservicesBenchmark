require "socket"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()

request = function()
  local profs = {'James Shealy', 'Christopher Batten', 'Vikram Krishnamurthy', 'Park Doing', 'Francesco Monticone', 'David Delchamps', 'Carl Poitras', 'Farhan Rana', 'David Hammer', 'Jayadev Acharya', 'Stephen Wicker', 'Hsiao-Dong Chiang', 'Alyosha Molnar', 'Debdeep Jena', 'Christina Delimitrou', 'Eilyan Bitar', 'Edwin Kan', 'Bruce Land', 'Francesca Parise', 'David Schneider', 'David Albonesi', 'Zhiru Zhang', 'Nils Napp', 'Mert Sabuncu', 'Clifford Pollock', 'Amit Lal', 'Lang Tong', 'Peter Doerschuk', 'Bruce Johnson'}
  local prof_id = math.random(1, #profs)
  
  tokens = string.gmatch(profs[prof_id], "[^%s]+")
  local args = tokens() .. "%20" .. tokens()
  local method = "GET"
  local headers = {}
--   headers["Content-Type"] = "application/x-www-form-urlencoded"
  local path = "http://localhost:5000/#/roster/prof/" .. args
  return wrk.format(method, path, headers, nil)
end
