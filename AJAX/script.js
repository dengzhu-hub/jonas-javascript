'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getData = country => {
  const requset = new XMLHttpRequest();
  requset.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  requset.send();
  requset.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(requset.responseText);
    console.log(data);
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.startOfWeek}</p>
      <p class="country__row"><span>💰</span>${data.status}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getData('Russian');
getData('usa');
getData('uk');
getData('pl');
getData('pt');
*/

const renderCountry = data => {
  const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.startOfWeek}</p>
    <p class="country__row"><span>💰</span>${data.status}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// fetch
// const request = fetch('https://jsonplaceholder.typicode.com/todos');
// console.log(request);

const getJson = (url, errorMes = 'somthing went wrong!') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMes);
    return response.json();
  });
};

const getCountryData2 = country => {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      if (!neighbor) throw new Error('there is no neighbor existing');
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`something err, ${err}`);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
};
// btn.addEventListener('click', function () {
//   getCountryData2('is');
// });
// getCountryData('usa');
// getCountryData2('be');
// getCountryData2('ca');
// getCountryData2('el');
// getCountryData2('eo');

// code challenge

// const whereAmI = (lat, lng) => {
//   // write yourt code
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=149268394134130111719x17595`
//   )
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error('request failed');
//       return response.json();
//     })
//     .then(data => {
//       //  console.log(data);
//       if (!data) throw new Error('there is no city was found');
//       console.log(`You are in ${data.country},${data.city}`);
//       // return console.log(data);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('request failed');
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(err));
// };
const test1 = [52.508, 13.381];
const test2 = [19.037, 72.873];
const test3 = [-33.933, 18.474];
// whereAmI(...test3);
// whereAmI(...test2);
// whereAmI(...test1);
// whereAmI(30.5927599, 114.30525);

//
// console.log('Test begin');
// setTimeout(() => console.log('start timer with zero'), 0);
// Promise.resolve('promise test 2').then(res => {
//   for (let i = 0; i < 100000000000; i++) {}

//   console.log(res);
// });
// Promise.resolve('promise test 1').then(res => console.log(res));
// console.log('Test end');

// create a promise
// const myPromise = new Promise((resolve, reject) => {
//   console.log('Lotter draw is happening 😘');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You are win 👍');
//     } else {
//       reject(new Error('You are lost 😔'));
//     }
//   }, 2000);
// });

// myPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   });

// navigator.geolocation.getCurrentPosition(
//   position => {
//     console.log(position);
//   },
//   err => {
//     console.error(err);
//   }
// );

const getPosition = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});
getPosition.then(pos => console.log(pos));

// const whereAmI = () => {
//   getPosition
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=149268394134130111719x17595`
//       );
//     })
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error('request failed');
//       return response.json();
//     })
//     .then(data => {
//       //  console.log(data);
//       if (!data) throw new Error('there is no city was found');
//       console.log(`You are in ${data.country},${data.city}`);
//       // return console.log(data);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('request failed');
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(err));
// };

// btn.addEventListener('click', whereAmI);

// code challenge 2
let imgContainer = document.querySelector('.images');
let div;
const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = imgPath;
    image.onload = () => {
      imgContainer.appendChild(image);
      resolve(image);
    };
    image.onerror = () => reject(new Error('filed to load image'));
  });
};
let currentImg;
// createImage('./img/img-1.jpg')
//   .then(res => {
//     currentImg = res;
//     console.log(res);

//     console.log('loaded 1 image');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('wait for 2 seconds');
//     return createImage('./img/img-2.jpg');
//   })
//   .then(res => {
//     currentImg = res;
//     console.log('load 2 image');
//     console.log(res);

//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// ASYNC AWAIT
const whereAmI = async country => {
  try {
    //geolocation
    const pos = await getPosition;
    console.log(pos);

    const { latitude: lat, longitude: lng } = pos.coords;
    //reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=149268394134130111719x17595`
    );
    // console.log(resGeo);

    if (!resGeo.ok) {
      throw new Error(
        'something went wrong, please check out for you self. 🥶'
      );
    }
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    //country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    // console.log(res);
    if (!res.ok) {
      throw new Error('Country was not found, pelase check out 🤢');
    }
    const [data] = await res.json();
    // console.log(data);
    // renderCountry(data);
    return `you are in ${data.region}`;
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>',
    });
    console.error(err.message);
    // reject the promise  return from asyns function
    throw err;
  }
};
btn.addEventListener('click', whereAmI);
// whereAmI();
console.log('First load');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log('finally: Third load'));

// IIFE

(async () => {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('finally: Third load');
  }
})();

// try catch

// try {
// } catch (err) {}

const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1.capital, data2.capital, data3.capital);
    const [data] = await Promise.all([
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};
get3Countries('usa', 'uk', 'pt');

// Promise.race()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'two');
});

Promise.race([promise1, promise2]).then(val => console.log(val));

(async () => {
  const [res] = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/italy`),
    getJson(`https://restcountries.com/v3.1/name/egypt`),
  ]);
  console.log(res['name']['common']);
})();

const timeout = s => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long.'));
    }, s * 1000);
  });
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(2),
])
  .then(val => console.log(val[0]['capital'][0]))
  .catch(err => console.error(err.message));

//Promise any
const pErr = new Promise((resolve, reject) => {
  reject('总是失败');
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, '最终完成');
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, '很快完成');
});

Promise.any([pErr, pSlow, pFast]).then(val => console.log(val));
// Promise allSettle()
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('failure'),
  Promise.resolve('another success'),
])
  .then(val => console.log(val))
  .catch(err => console.error(err.message));

// code challenge 3

// createImage('./img/img-1.jpg');
//   .then(res => {
//     currentImg = res;
//     console.log(res);

//     console.log('loaded 1 image');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('wait for 2 seconds');
//     return createImage('./img/img-2.jpg');
//   })
//   .then(res => {
//     currentImg = res;
//     console.log('load 2 image');
//     console.log(res);

//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// part 1
const loadPause = async () => {
  try {
    // load image 1 arealy
    let img = await createImage('./img/img-1.jpg');

    console.log('loaded 1 image');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('./img/img-2.jpg');
    console.log('load 2 image');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err.message);
  }
};

// loadPause();

// part 2

const loadAll = async function (imgAll) {
  try {
    const imgs = imgAll.map(async img => await createImage(img));
    console.log(imgs);
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
   imgEl.forEach(el => el.classList.add ('parallel'));
  } catch (err) {
    console.error(err.message);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);                                                                 
