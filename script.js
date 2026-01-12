function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("nav-menu").classList.remove("active");
}

function openWhatsApp(number) {
  window.open(`https://wa.me/${number}`, "_blank");
}
