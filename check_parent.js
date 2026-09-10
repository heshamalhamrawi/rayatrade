const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const sec = document.getElementById('sec-branches-directory');
let parent = sec.parentElement;
while (parent && parent.id !== 'manualContent') {
    console.log('Parent:', parent.tagName, parent.id, parent.className);
    parent = parent.parentElement;
}
