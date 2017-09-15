// Handle reading of files and merge in values
    // Read from file and get a string
        // Merge values in to string
var fs = require('fs');

function view(templateName, values, res) {
    // read from template file
    var data = fs.readFileSync('./views/' + templateName + '.html');
        // insert values into template

        // write out to the response
        res.write(data);
}

module.exports.view = view;