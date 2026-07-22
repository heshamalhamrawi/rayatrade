import re

with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

out_lines = []
skip = False
for i, line in enumerate(lines):
    if "<!--" in line and "SECTION: STORE FRONT" in line and not skip:
        # First occurrence
        if "O" in line and "color:#003399;" in line:
            # Fix the line 3072
            # It should be just the div text closed properly
            text_part = line.split("<!--")[0].strip()
            out_lines.append("                  " + text_part + "</div>\n")
            skip = True
            continue
    
    if skip:
        # We are skipping. We stop skipping when we reach the second occurrence of SECTION: STORE FRONT
        if "<!--" in line and "SECTION: STORE FRONT" in line:
            skip = False
            out_lines.append(line)
        elif line.strip() == "</div>" and "</div>" in lines[i+1] and "</div>" in lines[i+2]:
            # Actually, wait. The closing divs from 3447 to 3452 are:
            #                     </div>
            #                   </div>
            # 
            #               </div>
            #             </div>
            #           </div>
            #         </div>
            # We must NOT skip these. But wait, if they are inside the skipped region, they will be skipped!
            # Let's be exact. We want to skip from line 3073 to line 3444 (0-indexed 3072 to 3443).
            pass
            
    if not skip:
        out_lines.append(line)

# Let's just do it by index since we know the exact lines!
# line 3072 is index 3071
# It contains the first STORE FRONT
# The second STORE FRONT is at index 3453 (line 3454)

# Wait, let's find the indices dynamically to be safe.
idx_first_store = -1
idx_second_store = -1
for i, line in enumerate(lines):
    if "SECTION: STORE FRONT" in line:
        if idx_first_store == -1:
            idx_first_store = i
        else:
            idx_second_store = i
            break

# Let's find the closing divs before idx_second_store
idx_end_skip = idx_second_store
for i in range(idx_second_store - 1, idx_first_store, -1):
    if "</div>" in lines[i] and "</div>" in lines[i-1] and "</div>" in lines[i-2]:
        # This looks like the block of closing divs
        idx_end_skip = i - 6
        break

print(f"First store: {idx_first_store}, Second store: {idx_second_store}, End skip: {idx_end_skip}")

# Verify what we are skipping
print("Last 5 skipped lines:")
for line in lines[idx_end_skip-5:idx_end_skip]:
    print(line.strip())

print("First 5 kept lines (closing divs):")
for line in lines[idx_end_skip:idx_end_skip+5]:
    print(line.strip())

