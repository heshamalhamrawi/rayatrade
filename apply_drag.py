import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. CSS Updates for cbot-fab-btn
html = re.sub(
    r'\.cbot-fab-btn\{.*?\}',
    r'.cbot-fab-btn{position:fixed;bottom:calc(18px + env(safe-area-inset-bottom));left:16px;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#0A2540,#0B6E6E);color:#fff;box-shadow:0 10px 30px rgba(10,37,64,.45);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;padding:0;overflow:visible;transition:transform .18s;touch-action:none;}',
    html, count=1
)

html = re.sub(
    r'\.cbot-fab-btn span\.cbot-fab-label\{.*?\}',
    r'.cbot-fab-btn span.cbot-fab-label{display:none;}',
    html, count=1
)

html = re.sub(
    r'\.cbot-fab-btn\{height:56px;left:12px;bottom:calc\(85px \+ env\(safe-area-inset-bottom\)\);padding:4px;padding-inline-end:16px;gap:8px;border-radius:28px;z-index:999999;\}',
    r'.cbot-fab-btn{width:56px;height:56px;left:12px;bottom:calc(85px + env(safe-area-inset-bottom));padding:0;border-radius:50%;z-index:999999;}',
    html, count=1
)

# 2. Add Draggable Logic
drag_logic = r"""
  let isDragging = false;
  let dragStartX, dragStartY, initLeft, initBottom;
  
  btn.addEventListener('touchstart', (e) => {
    isDragging = false; 
    dragStartX = e.touches[0].clientX; 
    dragStartY = e.touches[0].clientY;
    const rect = btn.getBoundingClientRect(); 
    initLeft = rect.left; 
    initBottom = window.innerHeight - rect.bottom;
  }, {passive: true});
  
  btn.addEventListener('touchmove', (e) => {
    const dx = e.touches[0].clientX - dragStartX; 
    const dy = e.touches[0].clientY - dragStartY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      isDragging = true; 
      e.preventDefault();
      let newLeft = Math.max(0, Math.min(initLeft + dx, window.innerWidth - btn.offsetWidth));
      let newBottom = Math.max(0, Math.min(initBottom - dy, window.innerHeight - btn.offsetHeight));
      btn.style.left = newLeft + 'px'; 
      btn.style.bottom = newBottom + 'px';
    }
  }, {passive: false});

  btn.addEventListener('mousedown', (e) => {
    isDragging = false; 
    dragStartX = e.clientX; 
    dragStartY = e.clientY;
    const rect = btn.getBoundingClientRect(); 
    initLeft = rect.left; 
    initBottom = window.innerHeight - rect.bottom;
    
    const onMouseMove = (ev) => {
      const dx = ev.clientX - dragStartX; 
      const dy = ev.clientY - dragStartY;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        isDragging = true; 
        ev.preventDefault();
        let newLeft = Math.max(0, Math.min(initLeft + dx, window.innerWidth - btn.offsetWidth));
        let newBottom = Math.max(0, Math.min(initBottom - dy, window.innerHeight - btn.offsetHeight));
        btn.style.left = newLeft + 'px'; 
        btn.style.bottom = newBottom + 'px';
      }
    };
    
    const onMouseUp = () => { 
      document.removeEventListener('mousemove', onMouseMove); 
      document.removeEventListener('mouseup', onMouseUp); 
    };
    
    document.addEventListener('mousemove', onMouseMove); 
    document.addEventListener('mouseup', onMouseUp);
  });

  btn.addEventListener('click', (e)=>{
    if(isDragging) {
      e.preventDefault();
      return;
    }
"""

html = re.sub(
    r"btn\.addEventListener\('click', \(\)=>\{",
    drag_logic,
    html, count=1
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
