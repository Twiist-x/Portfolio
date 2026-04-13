// Typing Effect
const texts = [
    "I build data-driven web applications 🚀",
    "I love Machine Learning 🤖",
    "I create interactive websites 💻"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").innerHTML = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(typeEffect, 300);
        }, 1500);
    } else {
        setTimeout(typeEffect, 50);
    }
}

typeEffect();


// Theme Toggle with Memory
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
