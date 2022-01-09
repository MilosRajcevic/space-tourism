const btnNavOpen = document.querySelector("#menu-hamb");
const btnNavClose = document.querySelector("#menu-x");
const nav = document.querySelector(".navigation");

btnNavOpen.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  btnNavClose.style.display = "block";
  btnNavOpen.style.display = "none";
});

btnNavClose.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  btnNavClose.style.display = "none";
  btnNavOpen.style.display = "block";
});
