document.addEventListener('DOMContentLoaded', () => {
    const images = [];

    const closeBtn = document.getElementById('close-btn');


    // Generate image paths dynamically using a loop
    for (let i = 1; i <= 232; i++) {
        images.push(`../assets/images/${i}.webp`);
    }

    // Shuffle images array for random display
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(images);

    const slideshowImages = document.getElementById('slideshow-images');
    let currentIndex = 0;
    let playing = false;
    let slideshowInterval;

    // Populate the slideshow with images
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Slideshow Image';
        slideshowImages.appendChild(img);
    });

    const imageElements = slideshowImages.querySelectorAll('img');

    // Show the first image
    function showImage(index) {
        imageElements.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }
    showImage(currentIndex);

    // Play/Pause Slideshow
    const playPauseBtn = document.getElementById('play-pause-btn');
    playPauseBtn.addEventListener('click', () => {
        if (playing) {
            clearInterval(slideshowInterval);
            playPauseBtn.textContent = 'Play';
        } else {
            slideshowInterval = setInterval(nextImage, 3000);
            playPauseBtn.textContent = 'Pause';
        }
        playing = !playing;
    });

    // Show the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Show the previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Add event listeners for next/previous buttons
    document.getElementById('next-btn').addEventListener('click', nextImage);
    document.getElementById('prev-btn').addEventListener('click', prevImage);

    // Close button functionality to go back to the previous page
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        window.history.back();
    });
}


});


