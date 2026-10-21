const themeToggle = document.getElementById("themeToggle");

function applyTheme(isLight) {
  document.body.classList.toggle("light-mode", isLight);
  if (themeToggle) themeToggle.textContent = isLight ? "☀️" : "🌙";
}

// পেজ খুললে সেভ করা থিম পড়ে (না থাকলে dark)
let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (e) { }
applyTheme(savedTheme === "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-mode");
    applyTheme(isLight);
    try { localStorage.setItem("theme", isLight ? "light" : "dark"); } catch (e) { }
  });
}