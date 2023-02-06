'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

//? creating and inserting elements

//mdn document

const cookie = document.createElement('div');
cookie.classList = 'cookie-message';
cookie.innerHTML =
  ' Eat cookies Here:) <button class="btn btn--close--cookie">Yummy</button> ';

// header.prepend(cookie);
header.append(cookie);
// header.append(cookie.cloneNode(true));

// header.before(cookie);
// header.after(cookie);

//?Delete Elements

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    cookie.remove();
  });

//?Styles

cookie.style.backgroundColor = '#37383d';
cookie.style.width = '120%';

console.log(cookie.style.height);
console.log(cookie.style.width);
console.log(cookie.style.backgroundColor);

console.log(getComputedStyle(cookie).color);
console.log(getComputedStyle(cookie).height);

cookie.style.height =
  Number.parseFloat(getComputedStyle(cookie).height, 10) + 30 + 'px';
// console.log(cookie.style.height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//? Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//getAttribute and setAttribute

const link = document.querySelector('.twitter-link');
console.log(link.href);
//alternate way
console.log(link.getAttribute('href'));

//?Data attribute

// console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle('c');
logo.classList.contains('c');
logo.className = 'jonas';
