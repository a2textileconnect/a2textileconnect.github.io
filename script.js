function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const toggle = document.getElementById("menu-toggle");
  const isOpen = nav.classList.toggle("active");
  toggle.setAttribute("aria-expanded", isOpen);
}

function closeMenu() {
  document.getElementById("nav-menu").classList.remove("active");
  document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

const header = document.getElementById("site-header");
if (header) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
