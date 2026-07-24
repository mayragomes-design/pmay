window.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section[id], header[id], footer[id]");
    const navLinks = document.querySelectorAll("#mainNav .nav-link");

    function activateMenu() {

        let current = "";

        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {

            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (
                scrollPosition >= top &&
                scrollPosition < top + height
            ) {

                current = section.id;

            }

        });

        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 5
        ) {

            current = "footer";

        }

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activateMenu();

    window.addEventListener("scroll", activateMenu);

    /*====================
      Fecha menu mobile
    ====================*/

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

    /*====================
      Painel Sobre
    ====================*/

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
