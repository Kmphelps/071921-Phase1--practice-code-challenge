
//Page is already loaded because .js file was deferred 

const dogBar = document.getElementById("dog-bar"); 
const dogInfoDiv = document.getElementById("dog-info");

fetch("http://localhost:3000/pups") //Fetches the data
.then(response => response.json()) //Parses the data into a JavaScript object
.then(data => handlePups(data)); //Invokes a function, passing in the array of objects

function handlePups(listOfPups) { //Function that handles the dog data
    listOfPups.forEach(pup => { //Does something to each dog object
        const pupSpan = document.createElement("span"); //Creates a span for the dog being handled
        pupSpan.innerHTML = pup.name; //Adds the name property for the dog being handled to the span
        dogBar.append(pupSpan); //Adds the span to the dogBar

        pupSpan.addEventListener('click', function() { //Adds an event listener to the dogSpan being handled
            showPupInfo(pup); 
            
        })

function showPupInfo(pup) { //Adds html to the dogInfoDiv by computing (interpolating) the pup's properties 
    dogInfoDiv.innerHTML = `
        <img src=${pup.image}> 
        <h2>${pup.name}</h2>
        <button>${pup.isGoodDog ? 'Good' : 'Bad'}</button>
    `

    dogInfoDiv.querySelector('button').addEventListener('click', (e) => { //Adds event listener to the new button under showPupInfo
        pup.isGoodDog = !pup.isGoodDog; //Changes isGoodDog to the opposite value for the pup being handled
        showPupInfo(pup); //Runs ShowPupInfo again for that specific pup

    })

    ;

}

    })

}
