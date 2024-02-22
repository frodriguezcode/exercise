document.addEventListener("DOMContentLoaded", (event) => {
  // *Capture of elements in DOM
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  //*Funcion mostrar o ocultar menu
  const showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");
    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  // !capture click event of mobile_btn para mostrar boton del menu de navegacion responsive
  mobile_btn.addEventListener("click", showHiddenMenu);
  // !capture click event of mobile_btn

  // !Ocultar menu en pantallas sobre los 1000px
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);

    if (window_width >= 1000) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });
  // !Ocultar menu en pantallas sobre los 1000px

  // !Ocultar menu al dar click en boton close
  let btn_close = document.querySelector(".menu-mobile__close");
  btn_close.addEventListener("click", showHiddenMenu);
  // !Ocultar menu al dar click en boton close


  //!Desplegar submenus

  let menu_item = document.querySelectorAll(".menu-mobile__item");
  menu_item.forEach(item =>{
    item.addEventListener("click", (event)=>{
       let submenu = item.lastElementChild;
       if(submenu.className === "menu-mobile__submenu-mobile"){
          if( submenu.style.display === "block"){
            submenu.style.display = "none";
          }else{
            submenu.style.display = "block";

          }
       }
    })
  });

});
