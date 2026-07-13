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

        this.classlist.add("active")
    })
})