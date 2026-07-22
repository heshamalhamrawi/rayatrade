import sys

with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

# 1. Rename the second clearSearch
# The second one is at line 6669 (approx). Let's find it.
for i in range(len(lines)):
    if "function clearSearch(){" in lines[i] or "function clearSearch() {" in lines[i]:
        # There's two, we want the one that has sinp inside it
        if "sinp" in "".join(lines[i:i+5]):
            lines[i] = lines[i].replace("clearSearch", "clearProductSearch")
            break

# 2. Update line 451
for i in range(len(lines)):
    if 'id="clrBtn"' in lines[i] and 'onclick="clearSearch()"' in lines[i]:
        lines[i] = lines[i].replace('onclick="clearSearch()"', 'onclick="clearProductSearch()"')

# 3. Fix div imbalance
# We need to remove the three </div> right before main-protocol-installment
# and ensure they are placed after the end of main-protocol-installment.
# Actually, only two </div> are extra, let's remove two. Wait, no.
# We found:
#            </div>
#            </div>
#            </div>
#
#            <div id="main-protocol-installment" class="main-protocol-tab-content" style="display:none;">
# We need to replace these with just `</div>` which closes main-protocol-raya.
# Then after the content of main-protocol-installment, before sec-sales-procedures, we need to add the two </div> back.

# Let's find main-protocol-installment
installment_idx = -1
for i in range(len(lines)):
    if 'id="main-protocol-installment"' in lines[i]:
        installment_idx = i
        break

if installment_idx != -1:
    # Walk backward to find the three </div>
    # we want to leave just one.
    div_count = 0
    for i in range(installment_idx - 1, -1, -1):
        if "</div>" in lines[i]:
            if div_count < 2:
                lines[i] = lines[i].replace("</div>", "", 1)
                div_count += 1
            if div_count == 2:
                break

    # Now find the end of main-protocol-installment
    # It ends before sec-sales-procedures
    sales_proc_idx = -1
    for i in range(installment_idx, len(lines)):
        if 'id="sec-sales-procedures"' in lines[i]:
            sales_proc_idx = i
            break
            
    if sales_proc_idx != -1:
        # Walk backward from sales_proc_idx to find the `      </div>` before <!-- 📜 SECTION: SALES PROCEDURES 📜 -->
        # We need to add two </div> before the comment or div.
        lines.insert(sales_proc_idx - 1, "        </div>\n")
        lines.insert(sales_proc_idx - 1, "      </div>\n")

with open("index.html", "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Fixes applied successfully.")
