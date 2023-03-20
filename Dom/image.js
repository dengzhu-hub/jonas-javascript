'use strict';
const placeholder = document.getElementById('palceholders');

const showPic = whichPic => {
   const source =  whichPic.getAttribute('href');
   placeholder.setAttribute('src', source );


}
