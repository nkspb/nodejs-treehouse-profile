var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// Handle http route GET / and POST /
function home(req, res){
    if(req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        renderer.view("header", {}, res);
        renderer.view("search", {}, res);
        renderer.view("footer", {}, res);
        res.end();
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
        renderer.view("header", {}, res);

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
            renderer.view("profile", values, res);
            renderer.view("footer", {}, res);
            res.end();
        });
        studentProfile.on("error", function(err){
            // show error
            renderer.view("error", {errorMessage: err.message}, res);
            renderer.view("search", {}, res);
            renderer.view("footer", {}, res);
            res.end();
        });  
        
    }
     
            
            // on error
                // show error
}

module.exports.home = home;
module.exports.user = user;