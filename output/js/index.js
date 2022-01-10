const btnNavOpen = document.querySelector(".mob-btn");
// const btnNavClose = document.querySelector("#menu-x");// Sve ovo smo ishendlovali u css-u, _navigation.scss line 194-206
const nav = document.querySelector("header");

btnNavOpen.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  // btnNavClose.style.display = "block";  // Sve ovo smo ishendlovali u css-u, _navigation.scss line 194-206
  // btnNavOpen.style.display = "none";
});

// btnNavClose.addEventListener("click", () => {  // Sve ovo smo ishendlovali u css-u, _navigation.scss line 194-206
//   nav.classList.remove("nav-open");
//   // btnNavClose.style.display = "none";
//   // btnNavOpen.style.display = "block";
// });
