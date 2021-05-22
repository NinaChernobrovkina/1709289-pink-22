const menuButton = document.querySelector('.page-header__toggle');
const pageHeader = document.querySelector('.page-header');

menuButton.addEventListener('click', function () {
  pageHeader.classList.toggle('page-header--open');
});

pageHeader.classList.remove('page-header--nojs');
