require "socket"
local time = socket.gettime()*1000
math.randomseed(time)
math.random(); math.random(); math.random()

request = function()
  local coursecodes = {
    [1210, 2100, 2200, 2300, 3140, 3150, 3400, 3600, 4070, 4180, 4250, 4300, 4320, 4360, 4361, 4520, 4670, 4740, 4760, 4840, 4910, 4920, 4950, 4960, 4980, 4990, 4998, 4999, 5130, 5210, 5242, 5310, 5413, 5540, 5555, 5620, 5710, 5720, 5725, 5727, 5745, 5772, 5780, 5880, 5960, 5970, 5999, 6680, 6780, 6931, 6970, 6980, 7920, 2400, 2720, 2980, 3030, 3250, 4060, 4110, 4130, 4200, 4450, 4510, 4530, 4560, 4570, 4750, 4770, 4880, 5010, 5110, 5120, 5180, 5330, 5350, 5414, 5415, 5420, 5470, 5510, 5515, 5520, 5530, 5560, 5660, 5690, 5730, 5740, 5750, 5800]
                  }
  local coursecode_id = math.random(1, #coursecodes)
  
  local args = coursecodes[coursecode_id]
  local method = "GET"
  local headers = {}
--   headers["Content-Type"] = "application/x-www-form-urlencoded"
  local path = "http://localhost:5000/#/roster/class/SP21/ECE/" .. args
  return wrk.format(method, path, headers, nil)
end
