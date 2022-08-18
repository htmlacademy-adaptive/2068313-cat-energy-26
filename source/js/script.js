const btnNav = document.querySelector(".nav__toggle");
const wrapMenu = document.querySelector(".nav__wrapper");
const classMenuActive = "nav__wrapper-active";

const openMenu = ()=> {
  wrapMenu.classList.toggle(classMenuActive);

  if(wrapMenu.classList.contains(classMenuActive)){
    btnNav.style.backgroundImage = "url(./img/icons/Logo_mobile-close.svg)";

  }else{
    btnNav.style.backgroundImage = "url(./img/icons/Logo_mobile.svg)";
  }
}

btnNav.addEventListener('click', openMenu);

