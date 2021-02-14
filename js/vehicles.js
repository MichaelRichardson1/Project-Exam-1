const rocketsUrl = "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed";
const shipsUrl = "https://api.spacexdata.com/v4/ships/5ea6ed2e080df4000697c90a";
const dragonsUrl = "https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f";

const rocketsContainer = document.querySelector(".rockets");
const shipsContainer = document.querySelector(".ships");
const dragonsContainer = document.querySelector(".dragons");

async function fetchRockets () {
    try {
        const rocketsResponse = await fetch (rocketsUrl);
        const rocketsJson = await rocketsResponse.json();
        console.log(rocketsJson);
        const rockets = rocketsJson;
        rocketsContainer.innerHTML = "";
        for (let i = 0; i < rockets.length; i++) {
            const rocketsName = rockets[i].name;
            const rocketsType = rockets[i].type;
            const launchCost = rockets[i].cost_per_launch;
            const launchSuccess = rockets[i].success_rate_pct;
            const rocketsDescription = rockets[i].description;
            const flickrImg02 = rockets[i].flickr_images[1];
            rocketsContainer.innerHTML += `<div class="rockets-details">
                                                <h3>${rocketsName}</h3>
                                                <p>Type: ${rocketsType}</p>
                                                <p>Cost Per Launch: $${launchCost}</p>
                                                <p>Launch Success Rate: ${launchSuccess}</p>
                                                <img src="${flickrImg02}" title="falcon heavy rocket" alt="falcon heavy rocket stationary">
                                                <p>Description: ${rocketsDescription}</p>`
        }
    }
    catch (error) {
        console.log(error);
        rocketsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchRockets();

async function fetchShips () {
    try {
        const shipsResponse = await fetch (shipsUrl);
        const shipsJson = await shipsResponse.json();
        console.log(shipsJson);
        const ships = shipsJson;
        shipsContainer.innerHTML = "";
        for (let i = 0; i < ships.length; i++) {
            const shipsName = ships[i].name;
            const shipsType = ships[i].type;
            const shipsImg = ships[i].image;
            const shipsLink = ships[i].link;            
            shipsContainer.innerHTML += `<div class="ships-details">
                                                <h3>${shipsName}</h3>
                                                <p>Ship Type: ${shipsType}</p>                                                
                                                <img src="${shipsImg}" title="go pursuit cargo ship" alt="go pursuit cargo ship">
                                                <a href="${shipsLink}">Ship Details</a>`
        }
    }
    catch (error) {
        console.log(error);
        shipsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchShips();

async function fetchDragons () {
    try {
        const dragonsResponse = await fetch (dragonsUrl);
        const dragonsJson = await dragonsResponse.json();
        console.log(dragonsJson);
        const dragons = dragonsJson;
        dragonsContainer.innerHTML = "";
        for (let i = 0; i < dragons.length; i++) {
            const dragonsName = dragons[i].name;
            const dragonsType = dragons[i].type;
            const dragonsImg = dragons[i].flickr_images[2];  
            const dragonsDescription = dragons[i].description;                      
            dragonsContainer.innerHTML += `<div class="dragons-details">
                                                <h3>${dragonsName}</h3>
                                                <p>Type: ${dragonsType}</p> 
                                                <img src="${dragonsImg}" title="dragon capsule" alt="dragon capsule being fitted to rocket"> 
                                                <p>Description: ${dragonsDescription}</p>`
        }
    }
    catch (error) {
        console.log(error);
        dragonsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchDragons();

