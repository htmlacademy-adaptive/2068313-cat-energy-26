const logoText = document.querySelector(".main-header__logo-text");
logoText.style.left = "55%";

const btnNav = document.querySelector(".nav__toggle");
const btnNavOpen = "nav__toggle-active";
btnNav.classList.add(btnNavOpen);
const btnNavClose = "nav__toggle-close";

const wrapMenu = document.querySelector(".nav__wrapper");
const classMenuForJs = "nav__wrapper-js";
wrapMenu.classList.add(classMenuForJs);
const classMenuActive = "nav__wrapper-active";

const nav = document.querySelector(".nav");
nav.style.width = "initial";

const mainHeader = document.querySelector(".main-header");
mainHeader.style.flexDirection = "row";

const openMenu = ()=> {
  wrapMenu.classList.toggle(classMenuActive);

  if(wrapMenu.classList.contains(classMenuActive)){
    btnNav.classList.remove(btnNavOpen);
    btnNav.classList.add(btnNavClose);
  }else{
    btnNav.classList.add(btnNavOpen);
    btnNav.classList.remove(btnNavClose);
  }
}

btnNav.addEventListener('click', openMenu);
