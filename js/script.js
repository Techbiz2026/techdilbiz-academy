const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    const path = window.location.pathname;

    if (path.includes("/tr/")) {
        languageSelect.value = "/tr/index.html";
    } 
    else if (path.includes("/en/")) {
        languageSelect.value = "/en/index.html";
    } 
    else if (path.includes("/ar/")) {
        languageSelect.value = "/ar/index.html";
    } 
    else {
        languageSelect.value = "/index.html";
    }

    languageSelect.addEventListener("change", function () {
        window.location.href = this.value;
    });
}
// ===== MOBILE MENU =====
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}