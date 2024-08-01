var menuBar = document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_links');

navLinks.style.top = "-450px";

menuBar.onclick = function () {
    if (navLinks.style.top === "-450px") {
        navLinks.style.top = "5px";
    } else {
        navLinks.style.top = "-450px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const slideLeft = document.querySelector(".left-slide");
    const slideRight = document.querySelector(".right-slide");
    const upButton = document.querySelector(".up-button");
    const downButton = document.querySelector(".down-button");
    const slidesLength = document.querySelectorAll(".slide").length;

    let activeSlideIndex = 0;

    slideLeft.style.transform = `translateY(-${(slidesLength - 1) * 100}vh)`;

    const changeSlide = (direction) => {
        if (direction === "up" && activeSlideIndex < slidesLength - 1) {
            activeSlideIndex++;
        } else if (direction === "down" && activeSlideIndex > 0) {
            activeSlideIndex--;
        }

        slideRight.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
        slideLeft.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
    };

    upButton.addEventListener("click", () => changeSlide("up"));
    downButton.addEventListener("click", () => changeSlide("down"));

    // Otomatik slayt geçişini başlatan kod
    const intervalTime = 2000; // 5 saniye
    setInterval(() => {
        if (activeSlideIndex < slidesLength - 1) {
            changeSlide("up");
        } else {
            activeSlideIndex = -1; // Slaytları tekrar başa sarmak için
        }
    }, intervalTime);
});

function playAudio() {
    var audio = document.getElementById("backgroundMusic");
    audio.play();
}








