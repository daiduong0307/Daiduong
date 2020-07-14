// const { sumN, gtN } = require("./myLib");

// const myLib = require("./myLib");

// console.log(sumN(10))
// console.log(gtN(10))

// console.log(myLib.sumN(10))
// console.log(myLib.gtN(10))
function displayCurrentTime(res) {
    let d = new Date();
    let msg = `The time is--- ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    res.write(msg)
}

var http = require('http'); // 1- import Node.js core module
var server = http.createServer(function (req, res) { //2 - creating server

    if (req.url == '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><p style="color:red">This is home Page.</p>');
        displayCurrentTime(res);
        res.write('<br><a href ="https://www.youtube.com/watch?v=XdBsAXOxYfo&list=RDXdBsAXOxYfo&start_radio=1" target="_blank">click here</a>')
        res.write('<br><a href ="/login" target = "_blank"> click here to login</a>')
        res.write('<br><a href ="/register" target = "_blank"> click here to register</a>')
        res.write('</body></html>')
        res.end();
    }
    else if(req.url == '/login'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body style ="background-color: green"><p>This is Login Page.</p></body></html>');
        res.write('<br><a href ="../" target = "_blank"> click here back to home page</a>')
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><body style ="background-color: yellow"><p>404 unable to find the page</p></body></html>');
        res.write('<br><a href ="/login" target = "_blank"> click here to login</a>')
        res.write('<br><a href ="../" target = "_blank"> click here back to home page</a>')
        res.end();
    }

});
server.listen(5000); // 3 - listen for any imcoming requests