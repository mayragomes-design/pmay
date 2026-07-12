window.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(
        "header[id], section[id], footer[id]"
    );

    const navLinks = document.querySelectorAll("#mainNav .nav-link");

    function activateMenu() {

    let current = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {

            current = section.id;

        }

    });

    // Quando chegar ao final da página,
    // força o menu "Contato"

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

    // Fecha o menu mobile

    const navbarToggler = document.querySelector(".navbar-toggler");

    document.querySelectorAll("#navbarResponsive .nav-link").forEach(item => {

        item.addEventListener("click", () => {

            if (window.getComputedStyle(navbarToggler).display !== "none") {

                navbarToggler.click();

            }

        });

    });

});
