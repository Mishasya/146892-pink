var mainNav = document.querySelector('.main-nav');
var triggerNav = document.querySelector('.main-nav__trigger');
var pageHeader = document.querySelector('.page-header__wrapper');

mainNav.classList.remove('main-nav--nojs');

triggerNav.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      pageHeader.classList.contains('page-header__wrapper--opened');
      pageHeader.classList.remove('page-header__wrapper--opened');
      pageHeader.classList.add('page-header__wrapper--closed');

    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
      pageHeader.classList.add('page-header__wrapper--opened');
      pageHeader.classList.remove('page-header__wrapper--closed');
    }
  });
