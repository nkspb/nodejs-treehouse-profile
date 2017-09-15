// Handle reading of files and merge in values
    // Read from file and get a string
        // Merge values in to string
var fs = require('fs');

function mergeValues(values, content) {
    // cycle over values
    for (var key in values) {
    // replace {{key}} with the value from values
        content = content.replace("{{" + key + "}}", values[key]);
    }
    // return merged content
    return content;
}

function view(templateName, values, res) {
    // read from template file
    var data = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
    // insert values into template
    data = mergeValues(values, data);
    // write out to the response
    res.write(data);
}

module.exports.view = view;