const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.on("error", (...args) => {
  console.error("Console Error:", ...args);
});
virtualConsole.on("warn", (...args) => {
  console.warn("Console Warn:", ...args);
});
virtualConsole.on("log", (...args) => {
  console.log("Console Log:", ...args);
});

// Setup JSDOM
const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
    virtualConsole
});

// Let it run for a bit to see if any errors happen on load
setTimeout(() => {
    console.log("Done checking with jsdom.");
    // also let's check if a global variable like `clearProductSearch` exists
    console.log("Is clearProductSearch defined?", typeof dom.window.clearProductSearch !== 'undefined');
    process.exit(0);
}, 2000);
