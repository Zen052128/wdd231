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


document.querySelector("#timestamp").value =
new Date().toISOString();

const buttons =
document.querySelectorAll("[data-modal]");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document
.getElementById(button.dataset.modal)
.showModal();

});

});


document.querySelectorAll(".close")
.forEach(button=>{

button.addEventListener("click",()=>{

button.closest("dialog").close();

});

});