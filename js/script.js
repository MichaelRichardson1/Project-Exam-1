const launchesUrl = "https://api.spacexdata.com/v4/launches/5fd386aa7faea57d297c86c1";
const historyUrl = "https://api.spacexdata.com/v4/history/5f6fb44ddcfdf403df37972c";
const companyUrl = "https://api.spacexdata.com/v4/company";

const launchesContainer = document.querySelector(".launches");
const historyContainer = document.querySelector(".history");
const companyContainer = document.querySelector(".company");

async function fetchLaunches () {
    try {
        const launchesResponse = await fetch (launchesUrl);
        const launchesJson = await launchesResponse.json();
        console.log(launchesJson);
        const launches = launchesJson;
        launchesContainer.innerHTML = "";
        for (let i = 0; i < launches.length; i++) {
            const launchesImg = launches[i].links.patch.small;
            const reddit = launches[i].links.reddit.launch;
            const webcast = launches[i].links.webcast;
            const flickrImg01 = launches[i].links.flickr.original[0];
            const flickrImg04 = launches[i].links.flickr.original[3];
            const flickrImg05 = launches[i].links.flickr.original[4];
            const launchesArticle = launches[i].links.article;
            launchesContainer.innerHTML += `<div class="launches-details">
                                                <img src="${launchesImg}" title="dragon capsule" alt="dragon capsule patch">
                                                <iframe width="320" height="500" src="${reddit}></iframe>
                                                <iframe width="320" height="auto" src="${webcast}>}</iframe>
                                                <img src="${flickrImg01}" title="falcon heavy rocket" alt="falcon heavy rocket launch">
                                                <img src="${flickrImg04}" title="falcon heavy rocket" alt="falcon heavy rocket launch">
                                                <img src="${flickrImg05}" title="rocket test" alt="rocket test launch">
                                                <a href="${launchesArticle}>Late night cargo ship launch</a>`
        }
    }
    catch (error) {
        console.log(error);
        launchesContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchLaunches();

async function fetchHistory () {
    try {
        const historyResponse = await fetch (historyUrl);
        const historyJson = await historyResponse.json();
        console.log(historyJson);
        const history = historyJson;
        historyContainer.innerHTML = "";
        for (let i = 0; i < history.length; i++) {
            const historyTitle = history[i].title;
            const historyDetails = history[i].details;
            const historyArticle = history[i].links.article;            
            historyContainer.innerHTML += `<div class="history-details">
                                                <h3>${historyTitle}</h3>
                                                <p>${historyDetails}</p>                                                
                                                <a href="${historyArticle}">Nasa astronauts launch from US soil</a>`
        }
    }
    catch (error) {
        console.log(error);
        historyContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchHistory();

async function fetchCompany () {
    try {
        const companyResponse = await fetch (companyUrl);
        const companyJson = await companyResponse.json();
        console.log(companyJson);
        const company = companyJson;
        companyContainer.innerHTML = "";
        for (let i = 0; i < company.length; i++) {
            const companyName = company[i].name;
            const founder = company[i].founder;
            const founded = company[i].founded;  
            const employees = company[i].employees;
            const vehicles = company[i].vehicles;
            const launchSites = company[i].launch_sites;
            const summary = company[i].summary;
            const website = company[i].links.website;
            const flickr = company[i].links.flickr;
            const twitter = company[i].links.twitter;          
            companyContainer.innerHTML += `<div class="company-details">
                                                <p>Name: ${companyName}</p>
                                                <p>Founder: ${founder}</p> 
                                                <p>Founded: ${founded}</p> 
                                                <p>Employees: ${employees}</p>
                                                <p>Number of Vehicles: ${vehicles}</p>
                                                <p>Number of Launch Sites: ${launchSites}</p>
                                                <p>Brief: ${summary}</p>
                                                <a href="${website}">SpaceX</a>                                             
                                                <a href="${flickr}">Flickr</a>
                                                <a href="${twitter}">Twitter</a>`
        }
    }
    catch (error) {
        console.log(error);
        companyContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
}
fetchCompany();

