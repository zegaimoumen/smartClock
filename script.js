// setings

let secinputEle = 0;
let mininputEle = 0;
let hourinputEle = 0;
let dayinputEle = 1;
let monthinputEle = 1;
let yersinputEle = 2022;
let formEle = document.getElementById("form");

formEle.onsubmit = function (e) {
  e.preventDefault();
  secinputEle = document.getElementById("secinput").value;
  mininputEle = document.getElementById("mininput").value;
  hourinputEle = document.getElementById("hourinput").value;
  dayinputEle = document.getElementById("dayinput").value;
  monthinputEle = document.getElementById("monthinput").value;
  yersinputEle = document.getElementById("yersinput").value;
  localStorage.setItem("sec", JSON.stringify(secinputEle));
  localStorage.setItem("min", JSON.stringify(mininputEle));
  localStorage.setItem("hour", JSON.stringify(hourinputEle));
  localStorage.setItem("day", JSON.stringify(dayinputEle));
  localStorage.setItem("mounth", JSON.stringify(monthinputEle));
  localStorage.setItem("yers", JSON.stringify(yersinputEle));
  sec = +secinputEle;
  min = +mininputEle;
  hour = +hourinputEle;
  day = +dayinputEle;
  month = +monthinputEle;
  yers = +yersinputEle;
};

let lestRender = 0;
let sec = Number(JSON.parse(localStorage.getItem("sec"))) || 0;
let min = Number(JSON.parse(localStorage.getItem("min"))) || 0;
let hour = Number(JSON.parse(localStorage.getItem("hour"))) || 0;
let day = Number(JSON.parse(localStorage.getItem("day"))) || 1;
let month = Number(JSON.parse(localStorage.getItem("mounth"))) || 1;
let yers = Number(JSON.parse(localStorage.getItem("yers"))) || 2022;
let maxDays;

const secEle = document.getElementById("sec");
const minEle = document.getElementById("min");
const hourEle = document.getElementById("hour");
const dayEle = document.getElementById("day");
const monthEle = document.getElementById("month");
const yersEle = document.getElementById("yers");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLestRender = (currentTime - lestRender) / 1000;
  if (secondsSinceLestRender < 1 / 1) return;
  lestRender = currentTime;
  sec += currentTime - currentTime + 1;
  if (sec === 60) {
    sec = 0;
    min += 1;
  }

  if (min === 60) {
    min = 0;
    hour += 1;
  }

  if (hour === 24) {
    hour = 0;
    day += 1;
  }

  if (sec < 10) {
    secEle.innerHTML = `0${sec} <span class="subtitle">sec</span>`;
  } else {
    secEle.innerHTML = `${sec} <span class="subtitle">sec</span>`;
  }

  if (min < 10) {
    minEle.innerHTML = `0${min} <span class="subtitle">min</span>`;
  } else {
    minEle.innerHTML = `${min} <span class="subtitle">min</span>`;
  }

  if (hour < 10) {
    hourEle.innerHTML = `0${hour} <span class="subtitle">h</span>`;
  } else {
    hourEle.innerHTML = `${hour} <span class="subtitle">h</span>`;
  }

  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    maxDays = 32;
  }

  if (month === 2) {
    maxDays = 29;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    maxDays = 31;
  }

  if (day === maxDays) {
    day = 1;
    month += 1;
  }

  if (month === 13) {
    month = 1;
    yers += 1;
  }

  if (day < 10) {
    dayEle.innerHTML = `0${day}`;
  } else {
    dayEle.innerHTML = `${day}`;
  }

  if (month < 10) {
    monthEle.innerHTML = `0${month}`;
  } else {
    monthEle.innerHTML = `${month}`;
  }

  yersEle.innerHTML = `${yers}`;
}

window.requestAnimationFrame(main);
