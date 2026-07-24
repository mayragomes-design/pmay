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
