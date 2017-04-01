const path = require('path'),
    glob = require('glob')
    

let globPath = {
    js: './src/views/**/*.js',
    html: './*.html'
}

// vue 多页面入口
function getEntries(globPath) {
    let entries = {}, basename, tmp;
    glob.sync(globPath).forEach((entry) => {
        basename = path.basename(entry, path.extname(entry));
        entries[basename] = [];
        entries[basename].push(entry);
    });
    return entries;
}

// js && html 入口
exports.entriesJs = getEntries(globPath.js)
exports.entriesHtml = getEntries(globPath.html)