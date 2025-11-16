/************ DATA ************/
const products = [
  { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
  { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
  { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 },
];

const productTable = document.getElementById("productTable");
let currentEditId = null;

/************ LOAD TABLE ************/
function loadProducts() {
  productTable.innerHTML = "";

  products.forEach((p, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>Rp ${p.price.toLocaleString("id-ID")}</td>
        <td>${p.stock}</td>
        <td>
          <span class="edit" onclick="editProduct(${p.id})">
            <i class="fas fa-edit"></i>
          </span>
          <span class="delete" onclick="showDeleteConfirm(${p.id})">
            <i class="fas fa-trash"></i>
          </span>
        </td>
      `;
    productTable.appendChild(row);
  });
}

/************ EDIT ************/
function editProduct(id) {
  const p = products.find((x) => x.id === id);
  currentEditId = id;

  document.getElementById("editName").value = p.name;
  document.getElementById("editPrice").value = p.price;
  document.getElementById("editStock").value = p.stock;

  openModal("editModal");
}

function saveEdit() {
  const name = document.getElementById("editName").value.trim();
  const price = Number(document.getElementById("editPrice").value);
  const stock = Number(document.getElementById("editStock").value);

  if (!name || !price || !stock) {
    showNotif("Gagal!", "Semua field wajib diisi!", "error");
    return;
  }

  const p = products.find((x) => x.id === currentEditId);
  p.name = name;
  p.price = price;
  p.stock = stock;

  closeModal("editModal");
  loadProducts();

  showNotif("Sukses!", "Produk berhasil diperbarui!", "success");
}

/************ ADD ************/
document.querySelector(".add-product").addEventListener("click", function () {
  document.getElementById("addName").value = "";
  document.getElementById("addPrice").value = "";
  document.getElementById("addStock").value = "";

  openModal("addModal");
});

function saveAdd() {
  const name = document.getElementById("addName").value.trim();
  const price = Number(document.getElementById("addPrice").value);
  const stock = Number(document.getElementById("addStock").value);

  if (!name || !price || !stock) {
    showNotif("Gagal!", "Semua field wajib diisi!", "error");
    return;
  }

  products.push({
    id: Date.now(),
    name,
    price,
    stock,
  });

  closeModal("addModal");
  loadProducts();

  showNotif("Sukses!", "Produk berhasil ditambahkan!", "success");
}

/************ MODAL CONTROL ************/
function openModal(id) {
  const modal = document.getElementById(id);

  modal.style.display = "flex";

  const content = modal.querySelector(".modal-content");
  content.style.animation = "none";
  void content.offsetWidth;
  content.style.animation = "dropIn 0.35s ease-out";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

/************ ENTER TO SAVE (MODAL) ***********/
document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  const editOpen =
    document.getElementById("editModal").style.display === "flex";
  const addOpen = document.getElementById("addModal").style.display === "flex";

  if (editOpen) {
    e.preventDefault();
    saveEdit();
  }

  if (addOpen) {
    e.preventDefault();
    saveAdd();
  }
});

/************ DELETE CONFIRM ************/
let productToDelete = null;

function showDeleteConfirm(id) {
  productToDelete = id;

  const notifBox = document.getElementById("notifBox");
  const notifTitle = document.getElementById("notifTitle");
  const notifMessage = document.getElementById("notifMessage");
  const notifIcon = document.getElementById("notifIcon");

  notifBox.classList.remove("success", "error", "warning");
  notifIcon.className = "notif-icon";

  notifBox.classList.add("warning");
  notifIcon.classList.add("warning");

  notifIcon.textContent = "⚠";
  notifTitle.textContent = "Hapus Produk?";
  notifMessage.textContent = "Apakah Anda yakin ingin menghapus produk ini?";

  document.getElementById("notifActions").style.display = "none";
  document.getElementById("notifActions").style.display = "flex";

  notifBox.classList.add("show");
}

function confirmDelete() {
  reallyDeleteProduct(productToDelete);

  document.getElementById("notifActions").style.display = "none";

  showNotif("Berhasil!", "Produk berhasil dihapus!", "success");
}

function closeNotif() {
  const notifBox = document.getElementById("notifBox");
  notifBox.classList.remove("show");

  document.getElementById("notifActions").style.display = "none";
}

function reallyDeleteProduct(id) {
  const idx = products.findIndex((x) => x.id === id);
  products.splice(idx, 1);
  loadProducts();
}

loadProducts();
