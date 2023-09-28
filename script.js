// JavaScript to detect screen width and toggle navigation
function toggleNavigation() {
    const navList = document.getElementById("nav");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (window.innerWidth <= 768) {
        navList.style.display = "none";
        dropdownMenu.style.display = "flex";
    } else {
        navList.style.display = "flex";
        dropdownMenu.style.display = "none";
    }
}

// Call the function initially and whenever the window is resized
toggleNavigation();
window.addEventListener("resize", toggleNavigation);