document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".pro-slide");
    const dots = document.querySelectorAll(".slider-dot");
    const previousButton = document.querySelector(".slider-arrow.previous");
    const nextButton = document.querySelector(".slider-arrow.next");
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        if (slides[currentSlide]) {
            slides[currentSlide].classList.add("active");
        }

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function previousSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlider() {
        clearInterval(sliderTimer);

        sliderTimer = setInterval(function () {
            nextSlide();
        }, 4000);
    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextSlide();
            startSlider();
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            previousSlide();
            startSlider();
        });
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            showSlide(index);
            startSlider();
        });
    });

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });
        });
    }

    if (slides.length > 0) {
        showSlide(0);
        startSlider();
    }
});
// Statistics Counter Animation

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;
        const step = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = current;

        }, 20);

        counterObserver.unobserve(counter);

    });
}, {
    threshold: 0.4
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});// Contact Form -> WhatsApp

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const text =
`📌 يېڭى تىزىملىتىش

👤 ئىسمى: ${name}

📞 تېلېفون: ${phone}

📧 Email: ${email}

💬 ئۇچۇر:
${message}`;

        const url =
`https://wa.me/905054999884?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}