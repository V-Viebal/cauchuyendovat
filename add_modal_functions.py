with open('mirrored_pages/profile.html', 'r', encoding='utf-8') as f:
    text = f.read()

# JavaScript functions to handle open/close and dynamic updates for Edit and Add Item
modal_js_funcs = '''
let currentActiveData = null;

function showToast(msg) {
  const t = document.getElementById("profileToast");
  const tm = document.getElementById("toastMessage");
  if (t && tm) {
    tm.innerText = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2600);
  }
}

function openEditModal() {
  if (!currentActiveData) return;
  document.getElementById("edit-name").value = currentActiveData.name || "";
  document.getElementById("edit-bio").value = currentActiveData.bio || "";
  document.getElementById("edit-email").value = currentActiveData.email || "";
  
  // Extract phone & location from contact card if exists
  const phoneVal = document.querySelector(".b2b-info-val");
  document.getElementById("edit-phone").value = phoneVal ? phoneVal.innerText : "";
  
  document.getElementById("edit-location").value = currentActiveData.tags ? currentActiveData.tags[currentActiveData.tags.length - 1] : "";
  document.getElementById("edit-tags").value = currentActiveData.tags ? currentActiveData.tags.join(", ") : "";

  document.getElementById("editProfileModal").classList.add("is-open");
}

function closeEditModal() {
  document.getElementById("editProfileModal").classList.remove("is-open");
}

function saveProfileChanges(e) {
  e.preventDefault();
  if (!currentActiveData) return;

  const newName = document.getElementById("edit-name").value.trim();
  const newBio = document.getElementById("edit-bio").value.trim();
  const newEmail = document.getElementById("edit-email").value.trim();
  const newTagsStr = document.getElementById("edit-tags").value.trim();

  currentActiveData.name = newName;
  currentActiveData.bio = newBio;
  currentActiveData.email = newEmail;
  if (newTagsStr) {
    currentActiveData.tags = newTagsStr.split(",").map(s => s.trim()).filter(Boolean);
  }

  // Update DOM elements immediately
  document.getElementById("p-name").innerText = newName;
  document.getElementById("p-bio").innerText = newBio;
  const headerName = document.getElementById("headerUserName");
  if (headerName) headerName.innerText = newName;

  let tagsHtml = "";
  currentActiveData.tags.forEach(t => tagsHtml += `<span class="profile-tag-pill">${t}</span>`);
  document.getElementById("p-tags").innerHTML = tagsHtml;

  // Persist
  try {
    localStorage.setItem("monos_current_user", JSON.stringify({
      role: currentActiveData.roleKey,
      name: newName,
      email: newEmail,
      isLoggedIn: true
    }));
  } catch (err) {}

  closeEditModal();
  showToast("Đã lưu cập nhật thông tin hồ sơ thành công!");
}

function openAddItemModal() {
  if (!currentActiveData) return;
  const isStudio = currentActiveData.roleKey === "designer_stu";
  document.getElementById("addItemTitleText").innerText = isStudio ? "Mở Open Brief tìm xưởng sản xuất" : "Đăng tác phẩm / Dự án mới";
  document.getElementById("btnSubmitItem").innerText = isStudio ? "Đăng Open Brief lên Monos" : "Lưu vào danh mục";
  document.getElementById("addItemModal").classList.add("is-open");
}

function closeAddItemModal() {
  document.getElementById("addItemModal").classList.remove("is-open");
}

function saveNewItem(e) {
  e.preventDefault();
  const title = document.getElementById("new-item-title").value.trim();
  const desc = document.getElementById("new-item-desc").value.trim();
  const cat = document.getElementById("new-item-cat").value;

  const mainPanel = document.getElementById("mainSectionPanel");
  if (mainPanel) {
    const newItemHtml = `
      <div class="item-card-row" style="border-left:3px solid var(--terracotta,#c85a32); animation: fadeIn 0.3s ease;">
        <div style="width:64px; height:64px; border-radius:6px; background:#f0eee9; display:flex; align-items:center; justify-content:center; color:#666; font-size:11px; font-weight:700;">MỚI</div>
        <div class="item-card-info">
          <div class="item-card-name">${title}</div>
          <div class="item-card-sub">${desc}</div>
          <div style="font-size:11.5px; color:#888; margin-top:4px;">Phân loại: ${cat} · Vừa đăng</div>
        </div>
        <span class="item-status-badge" style="background:#e8f4fd; color:#0066cc;">Vừa thêm</span>
      </div>
    `;
    mainPanel.insertAdjacentHTML("beforeend", newItemHtml);
  }

  closeAddItemModal();
  document.getElementById("addItemForm").reset();
  showToast("Đã đăng mục mới vào hồ sơ thành công!");
}
'''

# Update switchProfile to store currentActiveData
target_switch = 'function switchProfile(mode) {'
replace_switch = '''function switchProfile(mode) {
  currentActiveData = profileData[mode];
  const d = currentActiveData;'''

text = text.replace(target_switch, replace_switch)

# Inject functions before </script>
idx_end_script = text.rfind('</script>')
text = text[:idx_end_script] + '\n' + modal_js_funcs + '\n' + text[idx_end_script:]

with open('mirrored_pages/profile.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Injected modal JavaScript functions and dynamic state!")
