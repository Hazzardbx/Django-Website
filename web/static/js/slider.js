todocument.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('slider');
    let slideInterval = setInterval(nextSlide, 4000); // Initializes slideshow "Interval"

    function nextSlide() {
        changeSlide(1); // Moves to next slide
    }

    function prevSlide() {
        changeSlide(-1); // Moves back one slide
    }

    function changeSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        updateSlidePosition();
        resetSlideInterval();
    }

    function updateSlidePosition() {
        let sliderWidth = slider.clientWidth;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
        });
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }

    // Add arrow event
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
});
