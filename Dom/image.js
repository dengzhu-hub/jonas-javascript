'use strict';
const placeholder = document.getElementById('palceholders');
const desc = document.querySelector('#description');
const link = document.querySelectorAll('.popUp');
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
const openUrl = function (winURL) {
   window.open(winURL, 'popup', 'width=320, height=300')

}
// openUrl('https://www.baidu.com');


window.onload = prepareLinks;
function prepareLinks () {
   link.forEach(t => {
      if (t.getAttribute('class') === 'popUp'){
         t.onclick = function () {
            openUrl(this.getAttribute('href'));
            return false;
         }
      }
   })

}