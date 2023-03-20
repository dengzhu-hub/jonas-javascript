'use strict';

///////////////////////////////////////
// Modal window
// #ff00ff
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sectionId = document.getElementById("section--1");
const sectionId2 = document.getElementById('section--2');
// console.log(overlay);

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


const allLink = document.querySelectorAll('a:link');
allLink.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);
    
    // scroll to top 
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const otherLink = document.querySelector(href);
      otherLink.scrollIntoView({behavior: 'smooth'});
    }

  })
})

const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function (e) {
  
 
  console.log(e);
  console.log(e.target.getBoundingClientRect());
  
  const scroods1 = sectionId.getBoundingClientRect();
  console.log(scroods1);
  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);
  
  console.log('height/width (viewport)', document.documentElement.clientHeight, document.documentElement.clientWidth);
  

  // scrool 
// this is old way 
// now we don't use it 

  window.scrollTo( {
    left: scroods1.left + window.pageXOffset,
    top: scroods1.top + window.pageYOffset,
    behavior: 'smooth',
  })

  // new way 
  sectionId.scrollIntoView({
    behavior: 'smooth',
  })
})



const h1 = document.querySelector('h1');
// h1.addEventListener('mousedown', (e) => {
//   alert('adventListener')

// })
// h1.addEventListener('mouseout', function (e) {

//   alert("mouseup!")
// })

// 事件监听可以嵌套监听，所以always use it；
const alertH1 = function (e) {
  alert('hi, do not click me, ok?');

}

h1.addEventListener('mouseenter', alertH1);
console.log('this is the word!');
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
  alert('I was destoried!')

}, 10000)

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.title);
const attr = document.getSelection();
console.log(attr);


// select element
const header = document.querySelector('.header');
console.log(header);
const  allSections = document.querySelectorAll('.section');
console.log(allSections);
console.log(allSections.length);
console.log(allSections.keys());
document.getElements
document.getElementById("section--1");
const allButton = document.getElementsByTagName("button");
console.log(allButton);
const child_nodes = sectionId.childNodes;
console.log(child_nodes.length);
sectionId.appendChild(document.createElement('h1'));
console.log(child_nodes.length);
console.log(child_nodes);



//create element;
// sectionId.insertAdjacentHTML();

const message = document.createElement('div'); //现在我是一个文档碎片， 还是javascript里面的孤儿。但是拥有Dom属性了
console.log(message.nodeType);

 message.classList.add('cookie-message');
message.innerHTML = 'we use cookie for improved functionality and analytics <button class="btn btn--close-cookie">Got it</button>';
// header.append(message);  //作为子元素
// header.prepend(message.cloneNode(true));
//header.before(message);  //这样就是header的兄弟了，在他前面显示
//header.after(message);   //这样就是header的兄弟了，在他后面显示
// header.appendChild(message);
// header.append(message);
// window.onload = function () {
//   const para = document.createElement('p');
//   let info = "NodeName:";
//   info += para.nodeName;
//   info += " nodeType:";
//   info += para.nodeType;
//   alert(info);
// }


//delete element

// document.querySelector('.btn--close-cookie').addEventListener('click', function () {

//   message.remove();

// })


// styles


// message.style.backgroundColor = '#ff00ff'; // 这样设置只存在与 inline style
// message.style.width = '120%';
// message.style.fontSize = '5.4rem';

// getComputedStyle( ) 样式
// console.log(getComputedStyle(message).fontSize);
console.log(  getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height,10)
// + 30 + 'px';
// console.log(  getComputedStyle(message).height);



document.documentElement.style.setProperty('--color-primary', '#00ffdd');

// const rootElement = document.documentElement;
// const firstElement = rootElement.childNodes;
// console.log(firstElement)


//attribute

const logo = document.querySelector('.nav__logo');
console.log(logo.getAttribute('src'))
logo.setAttribute('designer', 'jackDeng');

console.log(logo.src);


const liAttr = document.querySelectorAll('.footer__item');
console.log(liAttr)
// liAttr.forEach(function (li) {
//
//  li.setAttribute('title', 'jack is not jack ');
//  alert(li.getAttribute('title'));
//
// })
const twitter = document.querySelector('.twitter-link');
console.log(twitter.getAttribute('href'));
console.log(twitter.href);
const link_item = document.querySelector('.footer__link');
console.log(link_item.getAttribute('href'));
console.log(link_item.href);

// data -attribute 

const logo_img = document.getElementById('logo');
logo_img.setAttribute('designer', 'jonas');
console.log(logo_img.getAttribute('designer'));

console.log(logo_img.getAttribute('data-version-number'));

console.log(logo_img.dataset.versionNumber);

// classes 
logo_img.classList.add('jonas');
console.log(logo_img.getAttribute('class'));

logo_img.classList.remove('jonas');
console.log(logo_img.getAttribute('class'));

logo_img.classList.toggle('jonas');
console.log(logo_img.getAttribute('class'));
console.log(logo_img.classList.contains('jonas')
);


// don't use 
// logo_img.className = 'jack';
// console.log(logo_img.getAttribute('class'));


