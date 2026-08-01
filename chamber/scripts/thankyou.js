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

document.querySelector("#current-year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
document.lastModified;


const params = new URLSearchParams(window.location.search);

document.querySelector("#fname").textContent =
params.get("fname");

document.querySelector("#lname").textContent =
params.get("lname");

document.querySelector("#email").textContent =
params.get("email");

document.querySelector("#phone").textContent =
params.get("phone");

document.querySelector("#organization").textContent =
params.get("organization");

const timestamp = params.get("timestamp");

const formattedDate = new Date(timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
});

document.querySelector("#timestamp").textContent = formattedDate;