
const dogBar = document.getElementById("dog-bar");
const spanForName = document.createElement('span');
const dogInfo = document.getElementById("dog-info");

//Gets the pup objects
fetch('http://localhost:3000/pups') //Fetches the pups
.then((response) => response.json() //Converts the response to json
.then((data) => getPupNames(data))) //Invokes a function that takes the objects as the parameter and adds adds a `span` with the pup's name to the dog bar



function getPupNames(pups) { //Gets each pup name property from json and sends to the function to add each name to a span
    pups.forEach(function(pup) {
        addPupNameToSpan(pup.name);
    })
}

function addPupNameToSpan(pupName) { //Adds each pup name to a span and appends to the dog bar
    let spanForName = document.createElement('span');
    dogBar.appendChild(spanForName);
    spanForName.append(pupName);
}

spanForName.addEventListener('click', function(e) { //Adds event listener
    e.target
})



