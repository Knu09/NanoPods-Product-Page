const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});