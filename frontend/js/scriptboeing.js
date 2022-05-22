const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const countL = document.querySelector('.count');
const totalL = document.querySelector('.total');



const form = document.querySelector("#myForm");
const radioGroup = form.querySelectorAll("input[name=luggage]");
const resultElement = document.querySelector("#displayL");


populateUI();

// dodać cenę biletu i nr lotu z bazy danych lub localstorage
let ticketPrice = 1800
let selectedFlightIndex = "WAR200422"

// Save selected flight index and price
function setFlightData(flightIndex, flightPrice) {

  localStorage.setItem('selectedFlightIndex', flightIndex);
  localStorage.setItem('selectedFlightPrice', flightPrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  countL.innerText = selectedSeatsCount;
  totalL.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

function luggage() {
  
  for (const radio of radioGroup) {
    radio.addEventListener("change", e => {
        for (const radio of radioGroup) {
            if (radio.checked) {
                resultElement.textContent = radio.value; //pobieram tekst leżący obok radio
                break;
            }
        }
    });
  }
  }
  
  luggage()
}
// intial count and total
updateSelectedCount();