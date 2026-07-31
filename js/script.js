window.addEventListener("DOMContentLoaded", () => {

    /*====================================
      MENU ATIVO
    ====================================*/

    const navLinks = document.querySelectorAll("#mainNav .nav-link");
    const sections = document.querySelectorAll("section[id], header[id], footer[id]");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `#mainNav .nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    }, {

        root: null,

        /* considera a seção ativa enquanto ocupa boa parte da tela */
        rootMargin: "-25% 0px -45% 0px",

        threshold: 0

    });

    sections.forEach(section => observer.observe(section));

    /*====================================
      FECHAR MENU MOBILE
    ====================================*/

    const navbarToggler = document.querySelector(".navbar-toggler");

    document.querySelectorAll("#navbarResponsive .nav-link").forEach(item => {

        item.addEventListener("click", () => {

            if (
                navbarToggler &&
                window.getComputedStyle(navbarToggler).display !== "none"
            ) {

                navbarToggler.click();

            }

        });

    });

    /*====================================
      PAINEL SOBRE
    ====================================*/

    const aboutPanel = document.getElementById("aboutPanel");
    const aboutToggle = document.getElementById("aboutToggle");

    if (aboutPanel && aboutToggle) {

        aboutToggle.addEventListener("click", () => {

            aboutPanel.classList.toggle("open");

            const icon = aboutToggle.querySelector("i");

            if (icon) {

                icon.className = aboutPanel.classList.contains("open")
                    ? "fa-solid fa-chevron-right"
                    : "fa-solid fa-chevron-left";

            }

        });

    }

});
/* ==========================================================
   SERVICES SLIDERS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    function createSlider(sliderClass, prevClass, nextClass) {

        const slider = document.querySelector(`.${sliderClass}`);
        const prev = document.querySelector(`.${prevClass}`);
        const next = document.querySelector(`.${nextClass}`);

        if (!slider || !prev || !next) return;

        const cards = slider.querySelectorAll(".service-card");

        if (cards.length === 0) return;

        let index = 0;

        function getCardsPerView() {

            if (window.innerWidth >= 1200) return 3;

            if (window.innerWidth >= 768) return 2;

            return 1;

        }

        function updateSlider() {

            const cardsPerView = getCardsPerView();

            const cardWidth = cards[0].offsetWidth + 32;

            slider.style.transform =
                `translateX(-${index * cardWidth}px)`;

            prev.disabled = index === 0;

            next.disabled =
                index >= cards.length - cardsPerView;

        }

        next.addEventListener("click", () => {

            const cardsPerView = getCardsPerView();

            if (index < cards.length - cardsPerView) {

                index++;

                updateSlider();

            }

        });

        prev.addEventListener("click", () => {

            if (index > 0) {

                index--;

                updateSlider();

            }

        });

        window.addEventListener("resize", updateSlider);

        updateSlider();

    }

    createSlider(
        "branding-slider",
        "prev-branding",
        "next-branding"
    );

    createSlider(
        "website-slider",
        "prev-website",
        "next-website"
    );

    createSlider(
        "video-slider",
        "prev-video",
        "next-video"
    );

    createSlider(
        "social-slider",
        "prev-social",
        "next-social"
    );

});
