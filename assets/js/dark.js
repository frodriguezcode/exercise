document.addEventListener("DOMContentLoaded", () => {
  let switcher = document.querySelector(".switcher__btn");
  let light = document.querySelector(".switcher__icon-light");
  let dark = document.querySelector(".switcher__icon-dark");
  let logoDark = document.querySelector(".navbar__logo-dark");
  let logoLight = document.querySelector(".navbar__logo-light");

  let logoMobileDark = document.querySelector(".menu-mobile__logo2");
  let logoMobileLight = document.querySelector(".menu-mobile__logo");



  switcher.addEventListener("click", () => {
    let head = document.head;

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "assets/css/dark-mode.css";
    link.id = "theme-dark";

    let theme_dark = document.querySelector("#theme-dark");


    if (theme_dark) {
      head.removeChild(theme_dark);
      light.style.display = "block";
      dark.style.display = "none";
      logoDark.style.display = "none";
      logoLight.style.display ="block";
      logoMobileDark.style.display = "none";
      logoMobileLight.style.display = "block";

    } else {
      head.appendChild(link);
      dark.style.display = "block";
      light.style.display = "none";
      dark.style.color = "#ffdc60";
      logoDark.style.display = "block";
      logoLight.style.display ="none"
      logoMobileDark.style.display = "block";
      logoMobileLight.style.display = "none";
      

    }
  });
});
