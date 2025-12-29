const loader = document.getElementById("page-loader");

// FIRST LOAD SPLASH (ONLY ONCE)
if (!sessionStorage.getItem("visited")) {
    loader.classList.add("active");
    sessionStorage.setItem("visited", "true");
}

// HIDE LOADER – VERY SLOW (3.5s)
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.remove("active");
    }, 2500); // ⏳ 2.5 seconds
});

// PAGE CHANGE TRANSITION – SLOW
document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", e => {
        const url = link.getAttribute("href");

        if (
            url.startsWith("#") ||
            url.startsWith("http") ||
            link.target === "_blank"
        ) return;

        e.preventDefault();
        loader.classList.add("active");

        setTimeout(() => {
            window.location.href = url;
        }, 1500); // ⏳ 1.5 seconds
    });
});
