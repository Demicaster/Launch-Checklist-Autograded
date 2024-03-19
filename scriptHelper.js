// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const destination = document.getElementById("missionTarget");
    destination.innerHTML =
                ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src=${imageUrl}>
                 `
                 
                 ;
                 console.log(imageUrl);
                 //pushing
                   
    
}

function validateInput(testInput) {
    response = "OK";
    if (testInput === "") {
        response = "Empty"
    }
    else if (!isNaN(testInput)) {
        response = "Is a Number"
    }
    else if (isNaN(testInput)) {
        response = "Not a Number"
    }
    return response;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    inputList = [pilot, copilot, fuelLevel, cargoLevel];
    //          pilot 0 co pilot 1 fuelLevel 2 cargoLevel 3
    let validationList = [];
    let launchCheck = true;
    console.log("1")
    list.style.visibility = "hidden";

    inputList.forEach(item => {
        let validation = validateInput(item);
        if (validation !== "OK") {
            validationList.push(validation)
            //  console.log(validationList)
            return validationList;
        }
    });
    if (validationList[0] === "Not a Number" && validationList[1] === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        console.log("3")
    }
    if (validationList[2] === "Is a Number") {
        fuelLevel = parseFloat(fuelLevel)
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
            launchCheck = false;
            console.log(fuelLevel)

        }
        else {
            document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
            console.log(fuelLevel);
        }
    }
    if (validationList[3] === "Is a Number") {
        cargoLevel = parseFloat(cargoLevel);
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
            launchCheck = false;
            console.log(cargoLevel);

        }
        else {
            document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    
            console.log(cargoLevel);
        }
    }
    if (launchCheck) {
        document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        list.style.visibility = "visible";
        console.log("6.1");
    }
    else {
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        console.log("6.2");
        list.style.visibility = "visible";
    }
    return;
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    return  response.json();   
  

    });
  
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[(Math.floor(Math.random() * planets.length))];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;