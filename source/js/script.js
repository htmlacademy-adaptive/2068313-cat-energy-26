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

////// slider

const sliderRange = document.querySelector('.slider__range');
const sliderTop = document.querySelector('.slider__top');
const slider = document.querySelector('.slider');

const mouseMove = (evt) => {

  let left = evt.clientX - sliderTop.getBoundingClientRect().left;
  let percent = left / slider.offsetWidth * 100;


  if (percent < 0) {
    percent = 0;
  }
  if(percent > 100) {
    percent = 100
  }

  sliderTop.style.width = `${percent}%`;
  sliderRange.style.left = `${percent}%`;
}

sliderRange.addEventListener('mousedown', (evt) => {
evt.preventDefault();

slider.addEventListener('mousemove', mouseMove)

})

sliderRange.addEventListener('mouseup', (evt) => {

  slider.removeEventListener('mousemove', mouseMove)
})
