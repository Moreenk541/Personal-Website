const myname =document.getElementById("name")

myname.addEventListener("mouseover", rotate => {
    
    event.target.style.backgroundcolor = "red";
    
})
myname.addEventListener("mouseout", rotate => {
    
    event.target.style.color = "blue";
    
})

const navbar = document.getElementsByClassName("nav-bar");

for (let i = 0; i < myNames.length; i++) {
    myNames[i].addEventListener("mouseover", event => {
        event.target.style.transform = "rotate(30deg)"; // Rotates 30 degrees
    });

    myNames[i].addEventListener("mouseout", event => {
        event.target.style.transform = "rotate(0deg)"; // Reset rotation
    });
}