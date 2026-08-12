// =========================
// MOBILE NAVIGATION
// =========================

const navButton = document.querySelector("#nav-btn");
const nav = document.querySelector("#main-nav");

navButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("show");

    navButton.classList.toggle("open", isOpen);

    navButton.setAttribute("aria-expanded", isOpen);

    navButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// =========================
// CLOSE NAVIGATION AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("#main-nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show");
        navButton.classList.remove("open");

        navButton.setAttribute("aria-expanded", "false");

        navButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =========================
// LAST MODIFIED
// =========================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}


// =========================
// DAILY VERSE
// =========================
//
// This is intentionally kept local instead of
// scraping the Church website directly.
//
// You can later connect this section to your
// own JSON data or an approved API/source.
//

const dailyVerse = {
    text: "And now, behold, I say unto you, that the Lord hath redeemed my soul from hell.",
    reference: "2 Nephi 1:15"
};

const verseText = document.querySelector("#verse-text");
const verseReference = document.querySelector("#verse-reference");

if (verseText && verseReference) {

    verseText.textContent = `"${dailyVerse.text}"`;

    verseReference.textContent = dailyVerse.reference;

}