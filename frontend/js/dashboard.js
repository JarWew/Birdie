const { get } = require("mongoose");


const element = localStorage.getItem('mojElement');



const h1display = document.getElementById('mojElement');
h1display.textContent = `${element} `;



// displayPlane = () => {
    
//     const planeSmall = Embraer170
//     const planeMedium = Boeing737
//     const planeLarge = Boeing777;
    


    

// }

// displayPlane();


const destination = localStorage.getItem("destination");
const date = localStorage.getItem("date");
// const passengers = localStorage.getItem('passengers');


document.getElementById('showDestination').textContent = (`${destination}`);
document.getElementById('showDate').textContent = (`${date}`);



