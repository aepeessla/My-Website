// Variablen für die Scores
let score1 = 0;
let score2 = 0;

// Elemente greifen
const anzeige1 = document.getElementById("score1");
const anzeige2 = document.getElementById("score2");
const name1Display = document.getElementById("T1-name");
const name2Display = document.getElementById("T2-name");

// --- PUNKTELOGIK ---

// Team 1 Buttons
document.getElementById("Team1+1").addEventListener("click", () => {
    score1++;
    anzeige1.textContent = score1;
});

document.getElementById("Team1-1").addEventListener("click", () => {
    if (score1 > 0) score1--;
    anzeige1.textContent = score1;
});

// Team 2 Buttons
document.getElementById("Team2+1").addEventListener("click", () => {
    score2++;
    anzeige2.textContent = score2;
});

document.getElementById("Team2-1").addEventListener("click", () => {
    if (score2 > 0) score2--;
    anzeige2.textContent = score2;
});

// --- NAMENSLOGIK ---

function setupNameInput(inputId, displayId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(displayId);

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (input.value.trim() !== "") {
                display.textContent = input.value.toUpperCase();
            }
            input.value = "";
            input.blur(); // Eingabefeld verlassen
        }
    });
}

setupNameInput("input-t1", "T1-name");
setupNameInput("input-t2", "T2-name");

// --- RESET ---

document.getElementById("reset-btn").addEventListener("click", () => {
    score1 = 0;
    score2 = 0;
    anzeige1.textContent = "0";
    anzeige2.textContent = "0";
});
