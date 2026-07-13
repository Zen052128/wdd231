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