// প্রথমবার সাইটে ঢুকলে শুধু একবার splash loader দেখাবে
const loader = document.getElementById("page-loader");

if (!sessionStorage.getItem("visited")) {
  loader.classList.add("active");
  sessionStorage.setItem("visited", "true");
}

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.remove("active");
  }, 1500);
});

// Navbar-এর আসল উচ্চতা মেপে CSS variable (--nav-h) এ বসায়,
// যাতে স্ক্রল করলে সেকশনের হেডিং navbar-এর নিচে ঢুকে না যায়
function setNavHeight() {
  const nav = document.querySelector(".custom-nav");
  if (nav) {
    document.documentElement.style.setProperty("--nav-h", nav.offsetHeight + "px");
  }
}
setNavHeight();
window.addEventListener("load", setNavHeight);
window.addEventListener("resize", setNavHeight);

// মোবাইলে মেনুতে ক্লিক করলে মেনু নিজে বন্ধ হবে
document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});