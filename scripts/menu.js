document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#navMenu");

    if (toggle && navMenu) {
        toggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});