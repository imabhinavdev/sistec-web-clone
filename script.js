window.addEventListener("scroll", function () {
    var scrollDistance = window.scrollY;
    var mainNav = document.querySelector(".mainNav");

    if (scrollDistance > 100) {
        mainNav.style.top = "0";
        mainNav.style.animation = "expandMenu 0.5s ease-in-out forwards";
    } else {
        mainNav.style.animation = "compressMenu 0.25s ease-in-out forwards";
    }
});





