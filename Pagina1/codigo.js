const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  document.querySelector(".nav__menu").classList.toggle("show");
});

ScrollReveal().reveal(".banner");
ScrollReveal().reveal(".product__Cards", { delay: 500 });
ScrollReveal().reveal(".banner2", { delay: 500 });
ScrollReveal().reveal(".redes", { delay: 500 });
