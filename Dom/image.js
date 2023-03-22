'use strict';
const placeholder = document.getElementById('palceholders');
const desc = document.querySelector('#description');
// console.log(desc.getAttribute('title'));

console.log(desc.nodeValue);
// console.log(desc.childNodes[0].nodeValue);
console.log(  desc.firstChild.nodeValue);



const showPic = whichPic => {
   const source =  whichPic.getAttribute('href');
   placeholder.setAttribute('src', source );
   const text = whichPic.getAttribute('title');
   console.log(text);
   
   desc.firstChild.nodeValue = text;


}

function countBody () {
   var body_elements = document.getElementsByTagName('body')[0];
   // alert(body_elements.childNodes.length);
}
window.onload = countBody();

var body_element = document.getElementsByTagName('body')[0];
console.log(body_element.childNodes.length); //节点类型，远非元素节点一种。
console.log(body_element.nodeType); //节点类型，远非元素节点一种。
// noteType

