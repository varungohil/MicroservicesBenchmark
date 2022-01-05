require "socket"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()

request = function()
  local method = "GET"
  local headers = {}
  headers["Content-Type"] = "application/json"
  local path = "http://localhost:5000/#/sign-up"
  body = '{"username": "jb007", "password":"jb007", "first_name":"James", "last_name":"Bond"}'
  -- body = "username=jb007&password=007&first_name=James&last_name=Bond"
  return wrk.format(method, path, headers, body)
end
