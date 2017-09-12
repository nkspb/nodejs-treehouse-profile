// Problem: a simple way to look at a user's badge count and JS points from a web browser
// Solution: Use node.js to perform the profile lookups and server templates via HTTP

// Create web server
var router = require('./router.js');
var http = require('http');
http.createServer((req, res) => {
    router.home(req, res);
    router.user(req, res);
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337');

    

// Handle reading of files and merge in values
    // Read from file and get a string
        // Merge values in to string

