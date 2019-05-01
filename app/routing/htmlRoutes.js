// Dependencies
let path = require("path");

// Routing
module.exports = function(app) {
    // Defaults to the home.html page, unless the below is appended in the URL
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/survey.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/home.html"));
    });

    app.post(function(req, res){
        res.redirect()
    })
};  