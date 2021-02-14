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
        createRocketsHtml(rocketsJson);
        } catch (error) {
        console.log(error);
        rocketsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
function createRocketsHtml(rockets) {
    
        const rocketsName = rockets.name;
        const rocketsType = rockets.type;
        const launchCost = rockets.cost_per_launch;
        const launchSuccess = rockets.success_rate_pct;
        const rocketsDescription = rockets.description;
        const flickrImg02 = rockets.flickr_images[1];
        rocketsContainer.innerHTML += 
                                            `<h3>${rocketsName}</h3>
                                            <p>Type: ${rocketsType}</p>
                                            <p>Cost Per Launch: $${launchCost}</p>
                                            <p>Launch Success Rate: ${launchSuccess}</p>
                                            <img src="${flickrImg02}" title="falcon heavy rocket" alt="falcon heavy rocket stationary">
                                            <p>Description: ${rocketsDescription}</p>`
    
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
        createShipsHtml(shipsJson);
        } catch (error) {
        console.log(error);
        shipsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
function createShipsHtml(ships) {
    
        const shipsName = ships.name;
        const shipsType = ships.type;
        const shipsImg = ships.image;
        const shipsLink = ships.link;            
        shipsContainer.innerHTML += 
                                            `<h3>${shipsName}</h3>
                                            <p>Ship Type: ${shipsType}</p>                                                
                                            <img src="${shipsImg}" title="go pursuit cargo ship" alt="go pursuit cargo ship">
                                            <a href="${shipsLink}">Ship Details</a>`
    
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
        createDragonsHtml(dragonsJson);
        } catch (error) {
        console.log(error);
        dragonsContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
function createDragonsHtml(dragons) {
    
        const dragonsName = dragons.name;
        const dragonsType = dragons.type;
        const dragonsImg = dragons.flickr_images[2];  
        const dragonsDescription = dragons.description;                      
        dragonsContainer.innerHTML += 
                                            `<h3>${dragonsName}</h3>
                                            <p>Type: ${dragonsType}</p> 
                                            <img src="${dragonsImg}" title="dragon capsule" alt="dragon capsule being fitted to rocket"> 
                                            <p>Description: ${dragonsDescription}</p>`
    
}
}
fetchDragons();

