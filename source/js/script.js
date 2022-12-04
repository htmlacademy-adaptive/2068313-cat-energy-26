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

const inputRange = document.querySelector('.input-range');
const sliderTop = document.querySelector('.slider__top');
const sliderRangeAfter = document.querySelector('.slider__range::after');
const sliderButton = document.querySelector('.slider__label ');

console.log(sliderRangeAfter);

// sliderTop.style.width = '60%';

const sliderMove = ()=> {
  sliderTop.style.width = inputRange.value + '%';
  sliderButton.style.left = (inputRange.value - 7) + '%';
}


inputRange.addEventListener('input', () => {
  console.log(inputRange.value);
  sliderMove()
});
