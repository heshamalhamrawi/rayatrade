const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let target = 'function smartParseDesc(d, name){';
if(html.includes(target)){
  html = html.replace(target, 'function smartParseDesc(d, name){\n  if (!d) d = "";');
  fs.writeFileSync('index.html', html);
  console.log('Fixed index.html');
} else {
  console.log('Target not found');
}
