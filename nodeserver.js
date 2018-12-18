http  = require("http")
cfenv = require("cfenv")

// get CF environmental variables
appEnv   = cfenv.getAppEnv()
instance = appEnv.app.instance_index || 0

// create a server 
server = http.createServer(onRequest)

// start the server 
server.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url)
})

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})

  response.end("Hello BLUEY World - v1 - running on instance [" + instance + "] <BR>\n")
//  response.end("Hello GREENIE World - v2 - running on instance [" + instance + "] <BR>\n")
  response.end("\n")
}
