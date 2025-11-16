/************ NOTIFIKASI ************/
function showNotif(title, message, type = "error", isSuccess = null) {
  const box = document.getElementById("notifBox");
  const titleEl = document.getElementById("notifTitle");
  const msgEl = document.getElementById("notifMessage");
  const icon =
    document.getElementById("notifIcon") ||
    document.querySelector(".notif-icon");

  box.classList.remove("success", "error", "warning");
  icon.className = "notif-icon";

  if (isSuccess !== null) {
    if (isSuccess) {
      box.classList.add("success");
      icon.classList.add("success");
      icon.innerHTML = "✔";
    } else {
      box.classList.add("error");
      icon.classList.add("error");
      icon.innerHTML = "!";
    }
  } else {
    box.classList.add(type);
    icon.classList.add(type);
    icon.innerHTML = type === "success" ? "✔" : type === "warning" ? "⚠" : "!";
  }

  titleEl.textContent = title;
  msgEl.textContent = message;

  const actions = document.getElementById("notifActions");
  if (actions) {
    actions.style.display = type === "warning" ? "flex" : "none";
  }

  box.classList.add("show");

  if (type !== "warning") {
    setTimeout(() => {
      box.classList.remove("show");
    }, 2500);
  }
}

/************ SIDEBAR TOGGLE FOR MOBILE ************/
const sidebar = document.querySelector(".sidebar");
const menuBar = document.querySelector(".fas.fa-bars");

menuBar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
