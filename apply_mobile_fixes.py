import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Body fixes
html = html.replace(
    "body{font-family:'IBM Plex Sans Arabic',sans-serif;background:#EEF2F7;color:#0D1B2A;min-height:100vh}",
    "body{font-family:'IBM Plex Sans Arabic',sans-serif;background:#EEF2F7;color:#0D1B2A;min-height:100vh;overflow-x:hidden;width:100vw;max-width:100%}"
)

# 2. Add img responsive rule and table responsive rule
if ".subsection img" not in html:
    html = html.replace(
        ".subsection-title{font-size:14px;font-weight:700;color:#0B6E6E;margin-bottom:12px}",
        ".subsection-title{font-size:14px;font-weight:700;color:#0B6E6E;margin-bottom:12px}\n  .subsection img{max-width:100%;height:auto;border-radius:8px}\n  .subsection table{display:block;width:100%;overflow-x:auto;white-space:nowrap;}"
    )

# 3. Fix sku-specs-grid on mobile (it was 1fr 420px which breaks mobile)
html = html.replace(
    "@media (max-width: 480px) {\n  .sku-specs-grid { grid-template-columns: 1fr 420px; }\n}",
    "@media (max-width: 768px) {\n  .sku-specs-grid { grid-template-columns: 1fr; }\n}"
)

# 4. Fix app-layout and manual-panel on mobile
old_layout = """  @media (max-width: 900px) {
    .top-nav { padding: 0 16px; }
    .nav-badge { display: none; }
    .app-layout { grid-template-columns: 1fr; gap: 10px; margin: 10px; }
    .manual-panel { margin: 0; border-radius: 12px; }"""
new_layout = """  @media (max-width: 900px) {
    .top-nav { padding: 0 16px; }
    .nav-badge { display: none; }
    .app-layout { grid-template-columns: 1fr; gap: 6px; margin: 6px; width: calc(100% - 12px); overflow-x: hidden; box-sizing: border-box; }
    .manual-panel { margin: 0; border-radius: 12px; padding: 12px; width: 100%; overflow-x: hidden; box-sizing: border-box; }"""
html = html.replace(old_layout, new_layout)

# 5. Fix cbot-fab-btn on mobile (overlapping with mobile-chat-toggle)
old_fab_media = """  @media(max-width:640px){
    .cbot-fab-btn{height:56px;left:12px;bottom:calc(12px + env(safe-area-inset-bottom));padding:4px;padding-inline-end:16px;gap:8px;border-radius:28px;}"""
new_fab_media = """  @media(max-width:640px){
    .cbot-fab-btn{height:56px;left:12px;bottom:calc(85px + env(safe-area-inset-bottom));padding:4px;padding-inline-end:16px;gap:8px;border-radius:28px;z-index:999999;}"""
html = html.replace(old_fab_media, new_fab_media)

# 6. Fix comp-table horizontal scroll
html = html.replace(
    ".comp-table-wrap { width: 100%; overflow-x: auto; margin-top: 20px; border-radius: 8px; border: 1px solid #E4EAF2; }",
    ".comp-table-wrap { width: 100%; max-width: 100vw; overflow-x: auto; margin-top: 20px; border-radius: 8px; border: 1px solid #E4EAF2; -webkit-overflow-scrolling: touch; }"
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Applied mobile fixes successfully.")
