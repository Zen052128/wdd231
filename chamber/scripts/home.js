const hamburger = document.querySelector("#nav-button");
const nav = document.querySelector("#nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
});

const eclipse = document.querySelector("#themeMode-button");
eclipse.addEventListener("click", () => {
    eclipse.classList.toggle("night");
});

const currentYear = document.querySelector("#current-year");
const year = new Date().getFullYear();
currentYear.innerHTML = year;

const modify = document.querySelector("#lastModified");
const lastModified = document.lastModified;
modify.innerHTML = lastModified;

// const navLinks = document.querySelectorAll(".nav-link");
// const pageTitle = document.querySelector("#hero");

// navLinks.forEach(link => {
//     link.addEventListener("click", function(event) {
//         event.preventDefault();

//         pageTitle.textContent = this.textContent;

//         document.querySelector(".nav-link.active")?.classList.remove("active");

//         this.classList.add("active");
//     });
// });

// const activeLinkOnLoad = document.querySelector(".nav-link.active");
// if (activeLinkOnLoad) {
//     pageTitle.textContent = activeLinkOnLoad.textContent;
// };

const getCompanyData = async () => {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayCompanies(data.companies);
        // console.log(data.companies);
    } catch (error) {
        console.error("Error fetching data:", error)
    };
};


const cards = document.querySelector("#spotlights");

async function getMembers(){

const response = await fetch("data/members.json");

const data = await response.json();

const premium = data.companies.filter(company =>
company.membershipLevel === 2 ||
company.membershipLevel === 3
);

premium.sort(()=>0.5-Math.random());

displaySpotlights(premium.slice(0,3));

}

function displaySpotlights(companies){

companies.forEach(company=>{

const card=document.createElement("section");

card.classList.add("spotlight");

card.innerHTML=`

<h3>${company.companyName}</h3>

<img src="images/${company.image}" alt="${company.companyName}">

<p>${company.phone}</p>

<p>${company.address}</p>

<p>${company.website}</p>

<p>${company.membershipLevel}</p>

`;

cards.append(card);

});

}

getMembers();

const key="a2c7441e2e7a56c0156ef735151a0666";

const lat="14.617580382791797";

const lon="120.56436029443422";

const url=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

fetch(url)
.then(response=>response.json())
.then(data=>{

document.querySelector("#current-temp").textContent=
`${data.list[0].main.temp}°C`;

document.querySelector("#weather-desc").textContent=
data.list[0].weather[0].description;

const forecast=document.querySelector("#forecast");

forecast.innerHTML=`
<li>${data.list[8].main.temp}°C</li>
<li>${data.list[16].main.temp}°C</li>
<li>${data.list[24].main.temp}°C</li>
`;

});