const menuHumberger = document.querySelector(".navbarHamburger");
const navbarMenu = document.querySelector(".navbarMenu");
const closeIcon = document.querySelector(".navbarClose");
const title = document.querySelector(".navbarTitleMobile");

menuHumberger.addEventListener("click", () => {
  navbarMenu.classList.add("sidebar");
  closeIcon.classList.add("moveClose");
  title.classList.add("moveTitle");
});
closeIcon.addEventListener("click", () => {
  navbarMenu.classList.remove("sidebar");
  closeIcon.classList.remove("moveClose");
  title.classList.remove("moveTitle");
});
