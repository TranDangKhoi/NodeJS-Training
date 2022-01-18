var http = require("http");
var url = require("url");
var currentYear = new Date().getFullYear();

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"})
    var q = url.parse(req.url,true).query;
    var txt = q.name + " " + (currentYear - Number(q.year));
    res.end(txt);
}).listen(8085);

console.log("SV is running");