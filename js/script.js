const launchesUrl = "https://api.spacexdata.com/v4/launches/5fd386aa7faea57d297c86c1";
const historyUrl = "https://api.spacexdata.com/v4/history/5f6fb44ddcfdf403df37972c";
const companyUrl = "https://api.spacexdata.com/v4/company";

const launchesContainer = document.querySelector(".launches");
const historyContainer = document.querySelector(".history");
const companyContainer = document.querySelector(".company");

async function fetchLaunches () {
    try {
        const launchesResponse = await fetch(launchesUrl);
        const launchesJson = await launchesResponse.json();
        console.log(launchesJson);
        const launches = launchesJson;
        launchesContainer.innerHTML = "";
        createLaunchesHtml(launchesJson);
        } catch (error) {
        console.log(error);
        launchesContainer.innerHTML += `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
        }


function createLaunchesHtml(launches) {

    const launchesImg = launches.links.patch.small;
    const reddit = launches.links.reddit.launch;
    const webcast = launches.links.webcast;
    const flickrImg01 = launches.links.flickr.original[0];
    const flickrImg04 = launches.links.flickr.original[3];
    const flickrImg05 = launches.links.flickr.original[4];
    const launchesArticle = launches.links.article;
    launchesContainer.innerHTML +=`<img src="${launchesImg}" title="falcon 9" alt="falcon 9 patch">
                                    <iframe width="320" height="500" src="${reddit}></iframe>
                                    <iframe width="320" height="auto" src="${webcast}></iframe>
                                    <img src="${flickrImg01}" title="falcon heavy rocket" alt="falcon heavy rocket launch">
                                    <img src="${flickrImg04}" title="falcon heavy rocket" alt="falcon heavy rocket launch">
                                    <img src="${flickrImg05}" title="rocket test" alt="rocket test launch">
                                    <a href="${launchesArticle}>Late night cargo ship launch</a>`
    
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
        createHistoryHtml(historyJson);
        } catch (error) {
        console.log(error);
        historyContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
        }

function createHistoryHtml(history) {

    
    const historyTitle = history.title;
    const historyDetails = history.details;
    const historyArticle = history.links.article;            
    historyContainer.innerHTML += 
                                    `<h3>${historyTitle}</h3>
                                    <p>${historyDetails}</p>                                                
                                    <a href="${historyArticle}">Nasa astronauts launch from US soil</a>`
    
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
        createCompanyHtml(companyJson);       
    } catch (error) {
        console.log(error);
        companyContainer.innerHTML = `<p>There was an error fetching the data from the server.
                                          If the problem persists, please contact support.</p>`
    }
function createCompanyHtml(company) {
    
        const companyName = company.name;
        const founder = company.founder;
        const founded = company.founded;  
        const employees = company.employees;
        const vehicles = company.vehicles;
        const launchSites = company.launch_sites;
        const summary = company.summary;
        const website = company.links.website;
        const flickr = company.links.flickr;
        const twitter = company.links.twitter;          
        companyContainer.innerHTML += 
                                            `<p>Name: ${companyName}</p>
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
fetchCompany();

