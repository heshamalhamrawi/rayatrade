const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const dataCode = fs.readFileSync('data.js', 'utf8');

const context = {
    console: console,
    window: { addEventListener: () => {}, scrollTo: () => {}, innerWidth: 1024, innerHeight: 768, pageYOffset: 0, scrollY: 0 },
    document: {
        addEventListener: () => {},
        getElementById: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{}, contains: ()=>false, toggle: ()=>{} }, setAttribute: ()=>{}, addEventListener: ()=>{}, appendChild: ()=>{} }),
        createElement: () => ({ style: {}, classList: { add: ()=>{}, remove: ()=>{} }, setAttribute: ()=>{}, addEventListener: ()=>{} }),
        querySelector: () => ({ textContent: '', addEventListener: ()=>{} }),
        body: { classList: { add: ()=>{}, toggle: ()=>{} }, appendChild: ()=>{} },
        readyState: 'complete'
    },
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    confirm: () => true
};
context.window.document = context.document;
vm.createContext(context);

try {
    vm.runInContext(dataCode, context, { filename: 'data.js' });
    console.log('data.js executed successfully');
} catch (e) {
    console.error('Error in data.js:', e);
}

const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = scriptRegex.exec(html)) !== null) {
    count++;
    const code = match[1].trim();
    if (code) {
        try {
            vm.runInContext(code, context, { filename: `inline_script_${count}` });
            console.log(`Script ${count} executed successfully`);
        } catch (e) {
            console.error(`Runtime Error in Script ${count}:`, e.message);
            const lines = html.substring(0, match.index).split('\n');
            console.error(`Starts around line: ${lines.length}`);
        }
    }
}
console.log('Done checking runtime.');
