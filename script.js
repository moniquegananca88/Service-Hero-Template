const form = document.querySelector(".fale-conosco");
const background = document.querySelector(".mascara-form");

function showForm() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    background.style.visibility = "visible";
}

function hideForm() {
    form.style.left = "-330px";
    form.style.transform = "translateX(0)";
    background.style.visibility = "hidden";
}

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

