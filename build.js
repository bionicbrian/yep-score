var fs = require("fs");
var browserify = require("browserify");
// var watchify = require("browserify");
var babelify = require("babelify");

browserify("./lib/main.js")
   .transform(babelify.configure({
      optional: ["es7.decorators"]
   }))
  .bundle()
  .pipe(fs.createWriteStream("public/js/main.js"));
