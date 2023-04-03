'use strict';

///////////////////////////////////////
// Modal window
// #ff00ff
const modal = document.querySelector('.modal');
const header = document.querySelector('.header__title');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const sectionId = document.getElementById('section--1');
const sectionId2 = document.getElementById('section--2');
const nav_link = document.querySelector('.nav__link');
const all_nav_link = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');
const nav_links = document.querySelector('.nav__links');
const tab_containers = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const contents = document.querySelectorAll('.operations__content');
const allSections = document.querySelectorAll('.section');
const imageTarget = document.querySelectorAll('img[data-src]');
const slider = document.querySelectorAll('.slide');
const sliders = document.querySelector('.slider');
const btn_left = document.querySelector('.slider__btn--left');
const btn_right = document.querySelector('.slider__btn--right');
const dots = document.querySelector('.dots');
const dots__dot = document.querySelectorAll('.dots__dot');
console.log(contents);

// console.log( typeof sectionId);

// console.log(overlay);

const h1s = document.querySelector('h1');
console.log(h1s.childNodes[0].nodeValue); //本身文本h1
console.log(h1s.querySelector('.highlight'));

console.log(h1s.nodeType);

const h1Text = h1s.firstChild.nodeValue;
console.log(h1Text);

// h1s.firstElementChild.style.color = '#ff0022';
console.log(h1s.childNodes);
console.log(h1s.children); // 在direct children 有效

// going upwards

console.log(h1s.parentElement.children);
console.log(h1s.parentNode.childNodes); //
// h1s.closest('h1').style.backgroundImage = 'var( --gradient-secondary)';

//going sideways: siblings

console.log(h1s.previousElementSibling);
console.log(h1s.nextElementSibling);
console.log(h1s.nextSibling);
console.log(h1s.previousSibling);

// Tabbed component
// not use this
// tabs.forEach(t => {
//   t.addEventListener('click', () => {
//     console.log('tabbed');

//   })
// })
tab_containers.addEventListener('click', function (e) {
  e.preventDefault();
  const click = e.target.closest('.operations__tab');
  console.log(click);
  // guard clasue
  if (!click) return;
  // active  tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  contents.forEach(t => t.classList.remove('operations__content--active'));
  click.classList.add('operations__tab--active');
  console.log(click.getAttribute('data-tab'));
  console.log(click.dataset.tab);

  // active content area
  document
    .querySelector(`.operations__content--${click.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const hinderHover = function (e) {
  const link = e.target;
  // console.log(this, e.currentTarget);

  if (link.classList.contains('nav__link')) {
    const slbing = nav_link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(slbing);

    const logo = nav_link.closest('.nav').querySelector('img');
    // console.log(logo);
    slbing.forEach(li => {
      if (li !== link) li.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing "argument" into handler
// use bind method is the better way doing this
nav.addEventListener('mouseover', hinderHover.bind(0.5));
nav.addEventListener('mouseout', hinderHover.bind(1));

// stick  navgation

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   const initCords = sectionId.getBoundingClientRect();
//   console.log(initCords);

//   if (window.scrollY > initCords.top)  nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

// })

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const callback = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.intersectionRatio === 0) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obs = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
obs.observe(header);

// revealSection
const revealSection = function (entries, observe) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observe.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images

const lodingImag = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');  不建议使用这种，网速慢的情况下，加载会很慢
  // 使用自带的load event， 我们只需要监听
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};

const lazySectionObserve = new IntersectionObserver(lodingImag, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imageTarget.forEach(img => {
  lazySectionObserve.observe(img);
});

//  Slider
// 0% 100% 200% 300%
let currSlide = 0;
const maxSlide = slider.length;
// sliders.style.overflow = 'visible';
// sliders.style.transform = `scale(0.3) translateX(-1200px)`;
const sliderFunction = function () {
  // FUNCTION
  const goToSlide = function (slide) {
    slider.forEach((slde, i) => {
      console.log(i);
      // console.log(currSlide);
      slde.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  const createDots = function () {
    slider.forEach((_, i) => {
      dots.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activeDot(0);
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToPrevSlide = function () {
    if (currSlide === 0) currSlide = maxSlide - 1;
    else currSlide--;
    goToSlide(currSlide);
    activeDot(currSlide);
  };
  const goToNextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
    activeDot(currSlide);
  };
  init();

  // -100% 0% 100% 200%
  btn_right.addEventListener('click', goToNextSlide);
  btn_left.addEventListener('click', goToPrevSlide);
  // console.log('did');
  document.addEventListener('keyup', function (e) {
    //
    console.log(e.key);

    if (e.key === 'ArrowLeft') goToPrevSlide();
    // else if (e.key === 'ArrowRight') goToNextSlide();
    // shorting circuiting
    e.key === 'ArrowRight' && goToNextSlide();
  });

  dots.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('dot');
      const { slide } = e.target.dataset;
      console.log(slide);
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
sliderFunction();

// setInterval(sliderFunction, 2000);

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
// console.log(outid);
const body_element = document.getElementsByTagName('body')[0];
// console.log(body_element);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//page navigation

// all_nav_link.forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log( typeof id);

//     document.getElementById(id.slice(1)).scrollIntoView({
//       behavior: 'smooth',
//     })
//   })
// })

// 1. add event listener to common parent element
// 2. Determine what element originated the event

nav_links.addEventListener('click', e => {
  e.preventDefault();
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
  console.log(e.target);
});

// const allLink = document.querySelectorAll('a:link');
// console.log(allLink);

// allLink.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     console.log(href);

//     // scroll to top
//     if (href === '#') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     }
//     if (href !== '#' && href.startsWith('#')) {
//       const otherLink = document.querySelector(href);
//       otherLink.scrollIntoView({behavior: 'smooth'});
//     }

//   })
// })

const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function (e) {
  console.log(e);
  console.log(e.target.getBoundingClientRect());

  const scroods1 = sectionId.getBoundingClientRect();
  console.log(scroods1);
  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width (viewport)',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrool
  // this is old way
  // now we don't use it

  // window.scrollTo( {
  //   left: scroods1.left + window.pageXOffset,
  //   top: scroods1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  // new way
  sectionId.scrollIntoView({
    behavior: 'smooth',
  });
});

// nav_link.addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();

//   //stop propagation
//   // we should not use this ,
//   // e.stopPropagation();

// })
// nav_links.addEventListener('click', function (e) {
//   console.log('Linked', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);

//   this.style.backgroundColor = randomColor();

// })
// nav.addEventListener('click', function (e) {
//   console.log('Linkeing', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();

// })

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
};

// h1.addEventListener('mouseenter', alertH1);
// console.log('this is the word!');
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
//   alert('I was destoried!')

// }, 10000)

// RGBA();
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgba(${randomInt(0, 255)}, 
${randomInt(0, 255)},
${randomInt(0, 255)})`;
// console.log(randomColor());

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// const attr = document.getSelection();
// console.log(attr);

// select element
/*
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
window.onload = function () {
  const para = document.createElement('p');
  let info = "NodeName:";
  info += para.nodeName;
  info += " nodeType:";
  info += para.nodeType;
  alert(info);
}


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
*/

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// 离开网页时提示
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = 'Are you sure you want to leave?';
// });
