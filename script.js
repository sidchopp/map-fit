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

    ////// code(below) copied form the overview of leaflet library webpage
    // this 'map' below after L( which is for Leaflet) is the name of our id in the html where we want to show the location in map

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    /////// copied code from leaflet (above)

  }, function () {
    alert(' could not locate your position')
  });
