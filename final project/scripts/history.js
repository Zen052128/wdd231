// ==========================================
// BOOK OF MORMON HISTORY PAGE
// ==========================================

// Navigation
const navButton = document.querySelector("#nav-btn");
const nav = document.querySelector("#main-nav");

if (navButton && nav) {
    navButton.addEventListener("click", () => {
        nav.classList.toggle("show");

        const isOpen = nav.classList.contains("show");

        navButton.setAttribute("aria-expanded", isOpen);
        navButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}


// ==========================================
// LAST MODIFIED
// ==========================================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// ==========================================
// LOAD HISTORY DATA
// ==========================================

async function loadHistory() {

    const container = document.querySelector("#event-card-container");

    if (!container) {
        console.error("History card container was not found.");
        return;
    }

    try {

        const response = await fetch("data/history.json");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        displayHistory(data.events);

    } catch (error) {

        console.error("Unable to load history data:", error);

        container.innerHTML = `
            <p class="error-message">
                Sorry, the history could not be loaded at this time.
            </p>
        `;
    }
}


// ==========================================
// DISPLAY HISTORY CARDS
// ==========================================

function displayHistory(events) {

    const container = document.querySelector("#event-card-container");

    container.innerHTML = "";

    events.forEach((event, index) => {

        const card = document.createElement("article");

        card.classList.add("history-card");

        // Make the final publication card visually special
        if (index === events.length - 1) {
            card.classList.add("final-card");
        }

        card.innerHTML = `
            <div class="history-card-image">

                <img
                    src="images/${event.image}"
                    alt="${event.title}"
                    loading="lazy"
                >

                <span class="history-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

            </div>

            <div class="history-card-content">

                <p class="history-period">
                    ${event.period}
                </p>

                <h3>
                    ${event.title}
                </h3>

                <p class="scripture-reference">
                    ${event.scripture}
                </p>

                <p class="history-description">
                    ${event.description}
                </p>

                <a
                    href="${event.video}"
                    class="video-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch ${event.videoTitle}"
                >
                    Watch the Story
                    <span aria-hidden="true">→</span>
                </a>

            </div>
        `;

        container.appendChild(card);
    });
}


// ==========================================
// START
// ==========================================

loadHistory();