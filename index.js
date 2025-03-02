const myname = document.getElementById("name");
const overlayDiv  = document.getElementById("overlay1");


// Change text color on mouseover
myname.addEventListener("mouseover", (event) => {
    event.target.style.Color = "red"; 
});

// Change text color back on mouseout
myname.addEventListener("mouseout", (event) => {
    event.target.style.color = "blue";
});

// Change background color on mouseover for overlay
 overlayDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#D69ADE"; 
});
overlayDiv.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "black"; 
});



