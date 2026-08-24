const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Revert the corrupted line 3832
const bad_snippet = "في<script>function escapeRe(str) { return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'); }</script>الجهة";
const good_snippet = "في الجهة";
content = content.replace(bad_snippet, good_snippet);

// Now fix the actual escapeRe
const old_escape = `function escapeRe(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\<iframe src="raya_consultant_app.html" style="width:100%; height:85vh; border:none; border-radius:12px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); display:block; background: #fff;"></iframe>');
}`;
const new_escape = `function escapeRe(str) {
  return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
}`;

content = content.replace(old_escape, new_escape);

fs.writeFileSync('index.html', content);
console.log('Fixed index.html');
