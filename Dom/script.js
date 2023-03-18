'use strict';

///////////////////////////////////////
// Modal window
// #ff00ff
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
const outid = btnCloseModal.getAttribute('class');
console.log(outid);
const body_element = document.getElementsByTagName('body')[0];
console.log(body_element);
 

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


console.log('this is the word!');


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.title);
const attr = document.getSelection();
console.log(attr);
const header = document.querySelector('.header');
console.log(header);
const  allSections = document.querySelectorAll('.section');



