const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
try {
  // We don't want to run it, but parse it. Let's use node's check syntax.
  const vm = require('vm');
  new vm.Script(content);
} catch (e) {
  console.log('Error:', e.message);
  console.log('Stack:', e.stack.split('\n').slice(0, 5).join('\n'));
}
