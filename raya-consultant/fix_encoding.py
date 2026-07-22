
with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

try:
    # The text was mistakenly decoded as windows-1252 and saved as utf-8.
    # So we encode it back to windows-1252 to get the original utf-8 bytes.
    original_bytes = text.encode('windows-1252')
    original_text = original_bytes.decode('utf-8')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(original_text)
    print('Fixed using windows-1252')
except Exception as e:
    print('Failed windows-1252:', e)
    try:
        original_bytes = text.encode('windows-1256')
        original_text = original_bytes.decode('utf-8')
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(original_text)
        print('Fixed using windows-1256')
    except Exception as e2:
        print('Failed windows-1256:', e2)

