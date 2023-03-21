'use strict';
const placeholder = document.getElementById('palceholders');

const showPic = whichPic => {
   const source =  whichPic.getAttribute('href');
   placeholder.setAttribute('src', source );


}

function countBody () {
   var body_elements = document.getElementsByTagName('body')[0];
   alert(body_elements.childNodes.length);
}
window.onload = countBody();

var body_element = document.getElementsByTagName('body')[0];
console.log(body_element.childNodes.length);
