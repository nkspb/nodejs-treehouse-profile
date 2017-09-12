// Problem: a simple way to look at a user's badge count and JS points from a web browser
// Solution: Use node.js to perform the profile lookups and server templates via HTTP

// Create web server

var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setInterval(function(){
        res.write(new Date() + "\n");
    }, 1000);
    // res.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337');
// Handle http route GET / and POST /
    // if url === '/' && GET
        // show search field
    // if url == "/" && POST
        // redirect to /:username
// Handle http route GET /:username
    // if url == "/...."
        // get json
            // on end
                // show profile
            // on error
                // show error

// Handle reading of files and merge in values
    // Read from file and get a string
        // Merge values in to string

