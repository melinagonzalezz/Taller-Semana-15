document.addEventListener("DOMContentLoaded", function() {
    const carouselTexts = [
        "...vestibulum mollis, tortor ac congue commodo",
        "...quis vulputate dolor augue ut mauris",
        "...aliquet fringilla libero, quis dapibus massa"
    ];

    let currentIndex = 0;

    function updateCarousel() {
        const textCarousel = document.getElementById("text-carousel");
        textCarousel.textContent = carouselTexts[currentIndex];
        currentIndex = (currentIndex + 1) % carouselTexts.length;
    }

    setInterval(updateCarousel, 3000);
    updateCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-options');
    const optionsContainer = document.getElementById('options-container');

    toggleButton.addEventListener('click', function() {
        optionsContainer.classList.toggle('show');
    });
});
