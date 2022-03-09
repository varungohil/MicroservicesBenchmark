request = function()
  local method = "GET"
  local headers = {}
--   headers["Content-Type"] = "application/x-www-form-urlencoded"
  local path = "http://localhost:5000//wrk2-api/proflist"
  return wrk.format(method, path, headers, nil)
end
