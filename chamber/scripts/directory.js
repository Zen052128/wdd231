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

const navLinks = document.querySelectorAll(".nav-link");
const pageTitle = document.querySelector("#hero");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        pageTitle.textContent = this.textContent;

        document.querySelector(".nav-link.active")?.classList.remove("active");

        this.classList.add("active");
    });
});

const activeLinkOnLoad = document.querySelector(".nav-link.active");
if (activeLinkOnLoad) {
    pageTitle.textContent = activeLinkOnLoad.textContent;
};

const cards = document.querySelector("#business-cards");

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

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        card.classList.add("companyCard");

        let name = document.createElement("h2");
        let image = document.createElement("img");
        let infoDiv = document.createElement("div");

        let email = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");

        name.textContent = `${company.companyName}`;
        image.setAttribute("src", `images/${company.image}`);
        image.setAttribute("loading", "lazy")
        image.setAttribute("width", "200")
        image.setAttribute("height", "200")
        infoDiv.classList.add("card-info");

        email.textContent = `${company.email}`;
        phone.textContent = `${company.phone}`;
        url.textContent = `${company.website}`;

        infoDiv.appendChild(email);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(url);

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(infoDiv);

        cards.appendChild(card);
    });
};

getCompanyData();

const sourtButtons = document.querySelectorAll(".sort-btn");
const sortChangeButton = document.querySelector("#business-cards");
const sortDesignChange = document.querySelector(".companyCard")

sourtButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        document.querySelector(".sort-btn.active")?.classList.remove("active");

        button.classList.add("active");
        sortChangeButton.classList.toggle("flex");
        sortDesignChange.classList.toggle("flex");
    });
});