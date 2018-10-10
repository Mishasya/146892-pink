var mainNav = document.querySelector('.main-nav');
var triggerNav = document.querySelector('.main-nav__trigger');

mainNav.classList.remove('main-nav--nojs');

triggerNav.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });
