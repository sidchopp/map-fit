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

// using geolocation API
// Some browsers don't support it so we are using if statement

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(function (position) {
    //console.log(position);
    // de structuring 
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.ca/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    ////// code(below) copied form the overview of leaflet library webpage
    // this 'map' below after L( which is for Leaflet) is the name of our id in the html where we want to show the location in map. 13 is the zoom level for the map which we can change if we want but 13 is the best

    const map = L.map('map').setView(coords, 13);
    // to see what the leaflet library offers, we cl it
    //console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // we are using a method( on) from leaflet library( which is similar to addEventListner of JS)
    map.on('click', function (mapEvent) {
      // show form when a user click on the map
      form.classList.remove('hidden')
      // a blinking cursor appears in the input field of distance in the form as soon as someone clicks the map
      inputDistance.focus();


      // console.log(mapEvent);
      // const { lat, lng } = mapEvent.latlng;
      // // to add marker where a user clicks
      // L.marker({ lat, lng })
      //   .addTo(map)
      //   .bindPopup(
      //     // these properties are taken from the docs of leaflet website
      //     L.popup({
      //       maxWidth: 250,
      //       minWidth: 100,
      //       autoClose: false,
      //       closeOnClick: false,
      //       className: 'running-popup'
      //     })
      //   )
      //   .setPopupContent('That is me')
      //   .openPopup();
    });

  }, function () {
    alert(' could not locate your position')
  });
