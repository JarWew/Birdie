
// const element = localStorage.getItem('mojElement');

// const h1display = document.getElementById('mojElement');
// h1display.textContent = `${element} `;

const displayPlane = document.getElementById('displayPlane');
const destination = localStorage.getItem("destination");
const date = localStorage.getItem("date");

const destinationChoose = `${destination}`;

displayPlaneSite = () => {
    
    if(`${destination}` == 'Warszawa') {
        
    
        
    console.log('wyszło');

    } else if(destinationChoose == "Nowy York") {
        console.log(destinationChoose);
   
        // <div><%- include ('./embraer170.ejs') %></div>
    } else {console.log(destinationChoose);}
}
    
displayPlaneSite();


document.getElementById('showDestination').textContent = (`${destination}`);
document.getElementById('showDate').textContent = (`${date}`);



// <!-- <div id="displayPlane"><%- include ('./rozbraer20.ejs') %></div> -->