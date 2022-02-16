const hamburger = document.querySelector(".nav__hamburger");
const hamburgerLine = document.querySelectorAll(".nav__hamburger div");
const navLink = document.querySelector(".nav__link");
const linkItem = document.querySelectorAll(".link__item");
const links = document.querySelectorAll(".nav__link a");

hamburger.addEventListener("click", () => {
  hamburgerLine.forEach(line => {
    line.classList.toggle("changeHamburger");

    navLink.classList.toggle("link--opened");
  });
});

linkItem.forEach(item => {
  item.addEventListener("click", () => {
    navLink.classList.remove("link--opened");
    hamburgerLine.forEach(line => {
      line.classList.remove("changeHamburger");
    });

    line.classList.toggle("changeHamburger");
  });
});
