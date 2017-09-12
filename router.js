// Handle http route GET / and POST /
function home(req, res){
    if(req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Header\n");
        res.write("Search\n");
        res.end("Footer\n");
    }
    
    // if url === '/' && GET
        // show search field
    // if url == "/" && POST
        // redirect to /:username
}
// Handle http route GET /:username
function user(req, res) {
    // if url == "/...."
        // get json
            // on end
                // show profile
            // on error
                // show error
    var username = req.url.replace("/", "");
    if(username.length > 0) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Header\n");
        res.write(username + "\n");
        res.end("Footer\n");
    }
}

module.exports.home = home;
module.exports.user = user;