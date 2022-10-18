let isNavBar = false;

const logoIcon = document.querySelector(".logo");
const hamburgerIcon = document.querySelector(".hamburger");
const navBarList = document.querySelector(".nav-list");
const aboutNavList = document.querySelector(".about");
const projectsNavList = document.querySelector(".projects");
const getInTouchNavList = document.querySelector(".get-in-touch");

const backgroundSection = document.querySelector(".background-section");
const summarySection = document.querySelector(".summary-section");
const projectSection = document.querySelector(".project-section");
const detailsSection = document.querySelector(".get-in-touch-section");

hamburgerIcon.addEventListener("click", () => {
  isNavBar = !isNavBar;
  if (isNavBar) {
    navBarList.classList = "nav-list display fade-in";
  } else {
    navBarList.classList = "fade-out nav-list";
  }
});

aboutNavList.addEventListener("click", () => {
  isNavBar = !isNavBar;
  summarySection.scrollIntoView();
  navBarList.classList = "fade-out nav-list";
});

projectsNavList.addEventListener("click", () => {
  isNavBar = !isNavBar;
  projectSection.scrollIntoView();
  navBarList.classList = "fade-out nav-list";
});

getInTouchNavList.addEventListener("click", () => {
  isNavBar = !isNavBar;
  detailsSection.scrollIntoView();
  navBarList.classList = "fade-out nav-list";
});

logoIcon.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
