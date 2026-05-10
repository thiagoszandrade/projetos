window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("home");
 
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("ativo");
      menu.classList.toggle("aberto");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("ativo");
        menu.classList.remove("aberto");
      });
    });
  }
});
