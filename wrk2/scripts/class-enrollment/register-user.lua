require "socket"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()

request = function()
  local method = "POST"
  local headers = {}
  user_number = math.random(1, 100)
  args = "?username=user" .. tostring(user_number) .. "&password=password" .. toString(user_number) .."&firstname=firstname" .. toString(user_number) .. "&lastname=lastname" .. toString(user_number)
  local path = "http://localhost:5000/wrk2-api/register" .. args
  return wrk.format(method, path, headers, nil)
end
