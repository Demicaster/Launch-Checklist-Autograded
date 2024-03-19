// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        let pickedPlanet = pickPlanet(listedPlanets);
        console.log(pickedPlanet);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.






// console.log("loading") 
        let button = document.getElementById("formSubmit")

        button.addEventListener("click", function(event){
            event.preventDefault();

         let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        // console.log(typeof pilotName,copilotName,fuelLevel,cargoMass)

        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields are required!");
            return;
        }
        else{
            formSubmission(document,list,pilotName,copilotName,fuelLevel,cargoMass);
        }
            
            


        });
    });
    
