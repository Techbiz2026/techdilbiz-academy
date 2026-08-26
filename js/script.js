const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
    languageSelect.addEventListener("change", function () {

        const language = this.value;

        if (language === "ug") {
            window.location.href = "/index.html";
        }

        if (language === "tr") {
            window.location.href = "/tr/index.html";
        }

        if (language === "en") {
            window.location.href = "/en/index.html";
        }

        if (language === "ar") {
            window.location.href = "/ar/index.html";
        }

    });
}