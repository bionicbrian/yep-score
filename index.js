var path = require("path");
var express = require("express");
var app = express();

app.use(express.static("public"));

app.listen(8085, function () {
    console.log("App listening on port 8085 ...");
});
