'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
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

//? Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  // const s1co = section1.getBoundingClientRect();
  // console.log(s1co);

  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'Height/Width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //Scrolling
  //method 1
  // window.scrollTo(
  //   s1co.left + window.pageXOffset,
  //   s1co.top + window.pageYOffset
  // );
  //method 2
  // window.scrollTo({
  //   left: s1co.left + window.pageXOffset,
  //   top: s1co.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //method 3
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////
////////////////////////////////////////////////
//? Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Match
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////
/////////////////////////////////////////////////
/*

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

/*
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


// const h1 = document.querySelector('h1');

// const alerth1 = function (e) {
//   alert('Hi');
// };

// h1.addEventListener('mouseenter', alerth1);

// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000);
// // h1.addEventListener('mouseenter', function(e){
// //   alert('Mom')
// // })

//Event propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop Propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav', e.target, e.currentTarget);
});

//mdn event.target
//mdn event.currentTarget

//? Event Delegation
*/
