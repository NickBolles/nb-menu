var hostArgIndex = process.argv.indexOf("-host");
var portArgIndex = process.argv.indexOf("-port");
var hostArg, portArg;
if (hostArgIndex != -1){
    hostArg =process.argv[hostArgIndex+1];
}
if (portArgIndex != -1){
    portArg =process.argv[portArgIndex+1];
}
var host = hostArg || "127.0.0.1";
var port = portArg || 1337;

var express = require("express");
var baseDir = __dirname;

var app = express();
app.use('/', express.static(baseDir));
app.listen(port, host);
console.log("================================================================")
console.log("Serving Directory --> " + baseDir + "\r\n      At " + host + ":" + port);