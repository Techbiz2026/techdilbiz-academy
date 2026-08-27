const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    // ھازىرقى بەتكە قاراپ تىل نامىنى توغرا كۆرسىتىش
    const path = window.location.pathname;

    if (path.includes("/tr/")) {
        languageSelect.value = "tr";
    } else if (path.includes("/en/")) {
        languageSelect.value = "en";
    } else if (path.includes("/ar/")) {
        languageSelect.value = "ar";
    } else {
        languageSelect.value = "ug";
    }

    // تىل ئالماشتۇرۇش
    languageSelect.addEventListener("change", function () {
        const language = this.value;

        if (language === "ug") {
            window.location.href = "/index.html";
        } else if (language === "tr") {
            window.location.href = "/tr/index.html";
        } else if (language === "en") {
            window.location.href = "/en/index.html";
        } else if (language === "ar") {
            window.location.href = "/ar/index.html";
        }
    });
}