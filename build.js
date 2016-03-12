var fs = require("fs");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var decoratify = require("@yuzu/decoratify");

var b = runBrowserify("./lib/main.js")
    .transform(decoratify)
    .transform(babelify.configure({
        optional: ["es7.decorators"]
    }))
    .on("update", bundle)
    .on("error", onError)
    .on("time", onTime);

function onError(e) {
    console.error(e.message);
}

function onTime(time) {
    console.log("Wrote in " + time);
}

function bundle() {
    console.log("Bundling...")
    return b.bundle()
        .pipe(fs.createWriteStream("public/js/main.js"));
}

function runBrowserify(entry) {
    return process.argv.length > 2 && process.argv[2] === "--watch"
        ? watchify(browserify(entry, watchify.args))
        : browserify(entry);
}

bundle();
