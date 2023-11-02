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





function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let value = Math.floor(progress * (end - start) + start );
        obj.innerHTML=value +"+ "
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("counter-value1");
const obj2 = document.getElementById("counter-value2");
const obj3 = document.getElementById("counter-value3");
const obj4 = document.getElementById("counter-value4");
animateValue(obj1, 0, 23, 1500);
animateValue(obj2, 0, 2000, 1500);
animateValue(obj3, 0, 20000, 1500);
animateValue(obj4, 0, 1150, 1500);
