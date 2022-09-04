const btnNav = document.querySelector(".nav__toggle");
const wrapMenu = document.querySelector(".nav__wrapper");
const classMenuActive = "nav__wrapper-active";

const openMenu = ()=> {
  wrapMenu.classList.toggle(classMenuActive);

  if(wrapMenu.classList.contains(classMenuActive)){
    btnNav.style.backgroundImage = "url(./img/sprite.svg#logo_mobile-close)";

  }else{
    btnNav.style.backgroundImage = "url(./img/sprite.svg#logo_mobile)";
  }
}

btnNav.addEventListener('click', openMenu);
