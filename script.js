'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

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

//Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation

//Refactoring

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//?Sticky navigation
// const initCords = section1.getBoundingClientRect();
// console.log(initCords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//?Intersection observer API

// const obsCallBck = function (entries,observer) {
//   entries.forEach(entry => {console.log(entry);})
// };

// const obsOpt = {
//   root: null,
//   threshold: (0, 0.2),
// };

// const observer = new IntersectionObserver(obsCallBck, obsOpt);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerobserver.observe(header);

//? Reveal Section
const allSections = document.querySelectorAll('.section');

const revealSec = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSec, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
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

//mdn document;

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



const h1 = document.querySelector('h1');

// DOM TRAVERSING

//?Going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'blue';
h1.lastElementChild.style.color = 'orangered';

//?Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

//? Going sideways: sibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
