'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// golocation
let mapEvent, map;
const onMapClick = mapE => {
  mapEvent = mapE;
  // alert("You clicked the map at " + mapE.latlng)
  form.classList.remove('hidden');
  inputDistance.focus();
};
navigator.geolocation.getCurrentPosition(
  function successCallback(position) {
    console.log(position);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    console.log(
      `https://www.google.com/maps/place/@${latitude},${longitude},5z/`
    );

    const coords = [29.9999233, 106.1372669];
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> cont ributors',
    }).addTo(map);
    map.on('click', onMapClick);
  },
  function errorCallback() {
    alert('cound not found!');
  }
);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //Clear input fields
  // inputCadence.value =
  //   inputDistance.value =
  //   inputElevation.value =
  //   inputDuration.value =
  //     '';
  form.reset();
  //display marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
        .setLatLng(mapEvent.latlng)
        .setContent('You clicked the map at ' + mapEvent.latlng.toString())
    )
    .openPopup();
});
