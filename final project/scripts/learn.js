const hamburger = document.querySelector("#nav-btn");
const nav = document.querySelector("#main-nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("show");
        nav.classList.toggle("show");

        const menuOpen = nav.classList.contains("show");

        hamburger.setAttribute(
            "aria-expanded",
            menuOpen
        );

        hamburger.setAttribute(
            "aria-label",
            menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


/* Last modified */

const lastModified = document.querySelector("#lastModified");

if (lastModified) {

    lastModified.textContent =
        `Last Modified: ${document.lastModified}`;

}