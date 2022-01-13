require "socket"
json = require "json"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()



request = function()
    local coursecodes = {
      [1210, 2100, 2200, 2300, 3140, 3150, 3400, 3600, 4070, 4180, 4250, 4300, 4320, 4360, 4361, 4520, 4670, 4740, 4760, 4840, 4910, 4920, 4950, 4960, 4980, 4990, 4998, 4999, 5130, 5210, 5242, 5310, 5413, 5540, 5555, 5620, 5710, 5720, 5725, 5727, 5745, 5772, 5780, 5880, 5960, 5970, 5999, 6680, 6780, 6931, 6970, 6980, 7920, 2400, 2720, 2980, 3030, 3250, 4060, 4110, 4130, 4200, 4450, 4510, 4530, 4560, 4570, 4750, 4770, 4880, 5010, 5110, 5120, 5180, 5330, 5350, 5414, 5415, 5420, 5470, 5510, 5515, 5520, 5530, 5560, 5660, 5690, 5730, 5740, 5750, 5800]
     }
    local data = {
        ['1210']={ {'LEC 001','LEC 002'}, {},{} },
        ['2100']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 405','LAB 407','LAB 408','LAB 409','LAB 410','LAB 411','LAB 413','LAB 415','LAB 416'},{} },
        ['2200']={ {'LEC 001','LEC 002'}, {'LAB 401','LAB 402','LAB 403','LAB 404','LAB 405','LAB 406','LAB 407','LAB 408'},{} },
        ['2300']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403'},{} },
        ['3140']={ {'LEC 001'}, {},{'DIS 201','DIS 202','DIS 203','DIS 204','DIS 205'} },
        ['3150']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404','LAB 405','LAB 406','LAB 407','LAB 408'},{} },
        ['3400']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404','LAB 405'},{} },
        ['3600']={ {'LEC 001'}, {},{} },
        ['4070']={ {'LEC 001','LEC 002'}, {},{} },
        ['4180']={ {'LEC 001'}, {'LAB 411','LAB 412','LAB 421','LAB 422','LAB 431','LAB 432','LAB 441','LAB 442','LAB 451','LAB 452'},{} },
        ['4250']={ {'LEC 001','LEC 002'}, {},{} },
        ['4300']={ {'LEC 001','LEC 002'}, {},{} },
        ['4320']={ {'LEC 001','LEC 002'}, {'LAB 401','LAB 402'},{'DIS 201','DIS 202'} },
        ['4360']={ {'LEC 001','LEC 002'}, {},{} },
        ['4361']={ {}, {'LAB 401','LAB 402','LAB 403'},{} },
        ['4520']={ {'LEC 001'}, {},{} },
        ['4670']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4740']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404','LAB 405'},{'DIS 201'} },
        ['4760']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403'},{} },
        ['4840']={ {'LEC 001'}, {},{} },
        ['4910']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404'},{} },
        ['4920']={ {}, {},{} },
        ['4950']={ {'LEC 001'}, {'LAB 401'},{} },
        ['4960']={ {'LEC 001'}, {},{} },
        ['4980']={ {}, {},{} },
        ['4990']={ {}, {},{} },
        ['4998']={ {}, {},{} },
        ['4999']={ {}, {},{} },
        ['5130']={ {'LEC 001'}, {},{} },
        ['5210']={ {'LEC 001'}, {},{} },
        ['5242']={ {'LEC 030'}, {},{} },
        ['5310']={ {'LEC 001','LEC 002'}, {},{} },
        ['5413']={ {'LEC 001','LEC 030'}, {},{} },
        ['5540']={ {'LEC 001','LEC 002','LEC 030'}, {},{} },
        ['5555']={ {'LEC 001'}, {},{} },
        ['5620']={ {'LEC 001'}, {},{} },
        ['5710']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5720']={ {'LEC 001'}, {},{} },
        ['5725']={ {'LEC 001','LEC 002','LEC 030'}, {'LAB 401','LAB 402','LAB 403','LAB 401','LAB 402','LAB 403','LAB 401','LAB 402','LAB 403','LAB 431','LAB 432','LAB 433'},{} },
        ['5727']={ {}, {'LAB 401'},{} },
        ['5745']={ {'LEC 001','LEC 030'}, {},{} },
        ['5772']={ {'LEC 001'}, {'LAB 411','LAB 412','LAB 421','LAB 422','LAB 431','LAB 432','LAB 441','LAB 442','LAB 451','LAB 452'},{} },
        ['5780']={ {'LEC 001'}, {},{} },
        ['5880']={ {'LEC 001'}, {},{} },
        ['5960']={ {'LEC 001','LEC 002','LEC 003'}, {},{} },
        ['5970']={ {'LEC 001'}, {},{} },
        ['5999']={ {}, {},{} },
        ['6680']={ {'LEC 001','LEC 002','LEC 030'}, {'LAB 401','LAB 402','LAB 433'},{} },
        ['6780']={ {'LEC 001','LEC 002'}, {},{} },
        ['6931']={ {}, {},{} },
        ['6970']={ {'LEC 001','LEC 002'}, {},{} },
        ['6980']={ {'LEC 001'}, {},{} },
        ['7920']={ {}, {},{} },
        ['2100']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404'},{} },
        ['2300']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404'},{} },
        ['2400']={ {'LEC 001'}, {},{'DIS 201','DIS 202'} },
        ['2720']={ {'LEC 001'}, {},{'DIS 201','DIS 202','DIS 203'} },
        ['2980']={ {'LEC 001'}, {},{} },
        ['3030']={ {'LEC 001'}, {},{'DIS 201'} },
        ['3250']={ {'LEC 001'}, {},{'DIS 201'} },
        ['3400']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403','LAB 404','LAB 405'},{} },
        ['4060']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4110']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4130']={ {'LEC 001'}, {},{} },
        ['4200']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4450']={ {'LEC 001'}, {},{} },
        ['4510']={ {'LEC 001'}, {},{} },
        ['4530']={ {'LEC 001'}, {},{'DIS 201','DIS 202','DIS 203'} },
        ['4560']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4570']={ {'LEC 001'}, {'LAB 401'},{} },
        ['4740']={ {'LEC 001'}, {'LAB 401'},{} },
        ['4750']={ {'LEC 001'}, {},{'DIS 201'} },
        ['4760']={ {'LEC 001'}, {'LAB 402','LAB 403','LAB 404','LAB 405','LAB 406'},{} },
        ['4770']={ {'LEC 001'}, {},{} },
        ['4880']={ {'LEC 001','LEC 002'}, {'LAB 401'},{} },
        ['4920']={ {}, {},{} },
        ['4960']={ {'LEC 001'}, {},{} },
        ['4980']={ {}, {},{} },
        ['4998']={ {}, {},{} },
        ['4999']={ {}, {},{} },
        ['5010']={ {}, {},{} },
        ['5110']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5120']={ {'LEC 001'}, {},{'DIS 201','DIS 202'} },
        ['5180']={ {'LEC 001'}, {},{} },
        ['5330']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5350']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5413']={ {'LEC 031'}, {},{} },
        ['5414']={ {'LEC 030','LEC 031'}, {},{} },
        ['5415']={ {'LEC 030'}, {},{} },
        ['5420']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5470']={ {'LEC 001'}, {},{} },
        ['5510']={ {'LEC 001'}, {},{} },
        ['5515']={ {'LEC 030'}, {},{} },
        ['5520']={ {'LEC 001'}, {},{} },
        ['5530']={ {'LEC 001'}, {},{'DIS 201','DIS 202','DIS 203'} },
        ['5560']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5660']={ {'LEC 001','LEC 002'}, {},{} },
        ['5690']={ {'LEC 001','LEC 002'}, {'LAB 401'},{} },
        ['5725']={ {'LEC 001'}, {'LAB 401','LAB 402','LAB 403'},{} },
        ['5730']={ {'LEC 001'}, {'LAB 404','LAB 406'},{} },
        ['5740']={ {'LEC 001'}, {},{'DIS 201'} },
        ['5750']={ {'LEC 001'}, {},{} },
        ['5800']={ {'LEC 001'}, {},{} }
    }

    local user_number = math.random(1, 100)            
    local coursecode_id = math.random(1, #coursecodes)
    local file = io.open("state.txt", "r+")
    local content = file:read( "*a" )
    state = json.decode(content)
    if state["users"] == nil then
        state["users"] = {}
    end
    if state["user" .. toString(user_number)] == nil then
        state["user"..toString(user_number)] = {coursecodes[coursecode_id]}
        table.insert(state["users"], "user"..toString(user_number))
    else
        table.insert(state["user"..toString(user_number)],  coursecodes[coursecode_id])
    local content = json.encode(state)
    file:write( content )
    io.close( file )



    
    local args = "?wrkaddquery=1" .. "&user=user" .. toString(user_number) .. "&code=" .. toString(coursecodes[coursecode_id]) 

    local lecs = data[coursecodes[coursecode_id]][1]
    if table.getn(lecs) > 0 then
        local lec_id = math.random(1, #lecs)
        local lec = lecs[lec_id]
        args = args .. "&lec=" .. lec
    end
    local labs = data[coursecodes[coursecode_id]][2]
    if table.getn(labs) > 0 then
        local lab_id = math.random(1, #labs)
        local lab = labs[lab_id]
        args = args .. "&lab=" .. lab
    end
    local disc = data[coursecodes[coursecode_id]][3]
    if table.getn(disc) > 0 then
        local disc_id = math.random(1, #disc)
        local disc = disc[disc_id]
        args = args .. "&disc=" .. disc
    end
    
    
    
    if table.getn(lecs) == 0 and table.getn(labs) ==  0 and table.getn(disc) == 0 then 
        return nil
    end 
    
    local method = "GET"
    local headers = {}
    local path = "http://localhost:5000/#/dashboard" .. args
    return wrk.format(method, path, headers, nil)
  end