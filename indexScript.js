const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const myLogo = document.getElementById("myLogo")

hamburger.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
   // myLogo.style.zIndex = "100";
    e.stopPropagation();
});
document.body.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
});

window.addEventListener("load", () => {
    const loader = document.getElementById("mainLoader");
    const body = document.body;

    loader.classList.add("fadeOut");
    setTimeout (() => {
        loader.style.display = "none";
        document.body.style.display = "block";
    }, 800);
});
