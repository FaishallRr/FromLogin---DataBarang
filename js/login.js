document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

/************ VALIDASI LOGIN ************/
function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (email === "" && pass === "") {
    showNotif("Login Gagal", "Email dan Password harus diisi!", null, false);
  } else if (email === "") {
    showNotif("Login Gagal", "Harap isi email!", null, false);
  } else if (pass === "") {
    showNotif("Login Gagal", "Harap isi password!", null, false);
  } else if (email === "maulidyaaulia64@gmail.com" && pass === "24090126") {
    showNotif("Login Berhasil", "Anda akan diarahkan...", null, true);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  } else {
    showNotif("Login Gagal", "Email atau Password salah!", null, false);
  }
}

/************ MENGATUR ENTER KEY UNTUK LOGIN ************/
document.getElementById("email").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    login();
  }
});

document
  .getElementById("password")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      login();
    }
  });
