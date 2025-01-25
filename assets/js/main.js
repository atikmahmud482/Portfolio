/*=============== MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

/* Menu show - hidden */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });

  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle");
switcherClose = document.getElementById("switcher-close");

/* Switcher show */
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});
/* Switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});
/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = "light";
document.body.classList = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});
