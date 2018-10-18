var header = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

header.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (header.classList.contains('page-header--nav-closed')) {
    header.classList.remove('page-header--nav-closed');
    header.classList.add('page-header--nav-opened');
  } else {
    header.classList.add('page-header--nav-closed');
    header.classList.remove('page-header--nav-opened');
  }
});
