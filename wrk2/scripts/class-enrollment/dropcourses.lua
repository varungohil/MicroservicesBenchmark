require "socket"
json = require "json"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()



request = function()
               
    local file = io.open("state.txt", "r+")
    local content = file:read( "*a" )
    local state = json.decode(content)
    local user_number = math.random(1, #state["users"])
    local user = state["users"][user_number] 
    local course_id = math.random(1, #state[user])
    local code = state[user][course_id]
    table.remove(state[user], course_id)
    if #state[user] == 0 then
        table.remove(state["users"], user_number)
    end
    local content = json.encode(state)
    file:write( content )
    io.close( file )



    
    local args = "?wrkdropquery=1" .. "&user=user" .. toString(user_number) .. "&code=" .. toString(code) 
    
    local method = "GET"
    local headers = {}
    local path = "http://localhost:5000/#/dashboard" .. args
    return wrk.format(method, path, headers, nil)
  end