import chardet
with open('index.html', 'rb') as f:
    rawdata = f.read()
result = chardet.detect(rawdata)
print(result)
