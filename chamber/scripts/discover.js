import { places } from "../data/discover.mjs";

// ================================
// HEADER / NAVIGATION
// ================================

const hamburger = document.querySelector("#nav-button");
const nav = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show");
    nav.classList.toggle("show");
});


// ================================
// DARK / LIGHT MODE BUTTON
// ================================

const eclipse = document.querySelector("#themeMode-button");

eclipse.addEventListener("click", () => {
    eclipse.classList.toggle("night");
});


// ================================
// FOOTER YEAR
// ================================

const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();


// ================================
// LAST MODIFIED
// ================================

const modify = document.querySelector("#lastModified");

modify.textContent = document.lastModified;


// ================================
// ACTIVE NAVIGATION
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-link.active")
            ?.classList.remove("active");

        link.classList.add("active");

    });

});


// ================================
// DISCOVER CARDS
// ================================

const discoverCards = document.querySelector("#discover-cards");


function displayPlaces(places) {

    places.forEach((place, index) => {

        const card = document.createElement("article");

        card.classList.add("discover-card");

        card.classList.add(`card-${index + 1}`);


        card.innerHTML = `

            <h2>${place.name}</h2>

            <figure>

                <img
                    src="images/${place.image}"
                    alt="${place.name}"
                    width="300"
                    height="200"
                    loading="lazy"
                >

            </figure>

            <address>
                ${place.address}
            </address>

            <p>
                ${place.description}
            </p>

            <button type="button">
                Learn More
            </button>

        `;


        discoverCards.appendChild(card);

    });

}


displayPlaces(places);


// ================================
// LAST VISIT MESSAGE
// ================================

const visitText = document.querySelector("#visit-text");

const previousVisit = localStorage.getItem("lastVisit");

const currentVisit = Date.now();


if (!previousVisit) {

    // First visit
    visitText.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const timeDifference =
        currentVisit - Number(previousVisit);

    const millisecondsInDay =
        1000 * 60 * 60 * 24;

    const daysBetween =
        Math.floor(timeDifference / millisecondsInDay);


    if (daysBetween < 1) {

        visitText.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        visitText.textContent =
            "You last visited 1 day ago.";

    } else {

        visitText.textContent =
            `You last visited ${daysBetween} days ago.`;

    }

}


// Save the current visit for the next time
localStorage.setItem("lastVisit", currentVisit);