// Auto-typing effect
const typingText = "Let me build future";
let index = 0;

function typeText() {
  if (index < typingText.length) {
    document.getElementById("typing-text").textContent += typingText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();

// Dark/Light Mode toggle
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
