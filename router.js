var Profile = require("./profile.js");


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
    var username = req.url.replace("/", "");
    if(username.length > 0) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Header\n");

        // get json
        var studentProfile = new Profile(username);
        // on end
        studentProfile.on("end", function(profileJSON){
            // show profile
            // store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // Simple response
            res.write(values.username + " has " + values.badges + ' badges\n');
            res.end('Footer\n');
        });
        studentProfile.on("error", function(err){
            // show error
            res.write(err.message + "\n");
            res.end('Footer\n');
        });  
        
    }
     
            
            // on error
                // show error
}

module.exports.home = home;
module.exports.user = user;