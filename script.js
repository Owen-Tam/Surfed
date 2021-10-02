const submenu = document.querySelector(".submenu");
const submenuNavLink = document.querySelector(".contain-submenu");
const navLinks = document.querySelector(".nav-links");
const coursesContainer = document.querySelector(".courses-container");
const courseCards = document.querySelectorAll(".course-card");
const popularCard = document.querySelector(".popular");
const selectorBtns = document.querySelectorAll(".selector-btn");
submenuNavLink.addEventListener("mouseover", function (e) {
  submenu.classList.add("submenu-active");
});
submenuNavLink.addEventListener("mouseleave", function (e) {
  submenu.classList.remove("submenu-active");
});
const navLines = document.querySelector(".nav-lines");
const overlay = document.querySelector(".overlay");
const showNav = function () {
  navLinks.classList.add("nav-links-active");
  overlay.classList.add("overlay-shown");
  navLines.classList.add("nav-lines-active");
};
const unshowNav = function () {
  navLinks.classList.remove("nav-links-active");
  overlay.classList.remove("overlay-shown");
  navLines.classList.remove("nav-lines-active");
};
const toggleNav = function () {
  if (navLinks.classList.contains("nav-links-active")) {
    unshowNav();
  } else {
    showNav();
  }
};
navLines.addEventListener("click", toggleNav);
// Cant work cuz pointer-events set to none
// overlay.addEventListener("click", unshowNav);
window.addEventListener("resize", function () {
  if (window.innerWidth > 754) {
    overlay.classList.remove("overlay-shown");
    navLinks.classList.remove("nav-links-active");
    navLines.classList.remove("nav-lines-active");
  }
});

//TODO Make the course cards hover like hoststinger
const selector = document.querySelector(".selector");
const allCourseCards = document.querySelectorAll(".course-card");

selector.addEventListener("click", function (e) {
  if (e.target.classList.contains("selector-btn")) {
    allCourseCards.forEach(card => {
      card.classList.remove("course-card-active");
    });
    document
      .querySelector(`.course-card-${e.target.dataset.num}`)
      .classList.add("course-card-active");
    selectorBtns.forEach(btn => btn.classList.remove("selector-active"));
    e.target.classList.add("selector-active");
  }
});
