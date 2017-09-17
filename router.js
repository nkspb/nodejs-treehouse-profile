var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var fs = require('fs');

var commonHeaders = {'Content-Type': 'text/html'};

// Handle css route
function serveCSS(req, res) {
    if (req.url.indexOf(".css") !== -1){
        var file = fs.readFileSync(`.${req.url}`, {'encoding' : 'utf-8'});
        res.writeHead(200, {'Content-Type' : 'text/css'});
        res.write(file);
        res.end();
    }
}

// Handle http route GET / and POST /
function home(req, res){
    if(req.url == "/") {
        // if url === '/' && GET
        // show search field
        if (req.method.toLowerCase() === 'get') {
            res.writeHead(200, commonHeaders);
            renderer.view("header", {}, res);
            renderer.view("search", {}, res);
            renderer.view("footer", {}, res);
            res.end();
        } else {
            // if url == "/" && POST
            req.on("data", function(postBody) {
                // get post data from body
                var query = querystring.parse(postBody.toString());
                // redirect to /:username
                res.writeHead(303, {"Location": "/" + query.username });
                res.end();
            });
        }
    }
}

// Handle http route GET /:username
function user(req, res) {
    // if url == "/...."
    var username = req.url.replace("/", "");
    if(username.length > 0 && req.url.indexOf('.css') === -1) {
        res.writeHead(200, commonHeaders);
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

module.exports.serveCSS = serveCSS;
module.exports.home = home;
module.exports.user = user;

