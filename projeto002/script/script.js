window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo");
  }
});
