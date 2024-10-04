// random.js
document.addEventListener('DOMContentLoaded', () => {
    const randomBtn = document.getElementById('random-btn');
    const randomImageDiv = document.getElementById('random-image');
    const closeBtn = document.getElementById('close-btn');

    const images = [];

    // Generate image paths dynamically using a loop
    for (let i = 1; i <= 230; i++) {
        images.push(`../assets/images/${i}.webp`);
    }

    randomBtn.addEventListener('click', () => {
        let index = 0;

        // Flicker through 10 images
        const interval = setInterval(() => {
            randomImageDiv.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
            randomImageDiv.style.backgroundSize = 'cover';
            index++;
            if (index >= 10) {
                clearInterval(interval);
                // Set the final 11th image
                randomImageDiv.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
            }
        }, 200); // Flicker speed
    });

    // Close button functionality to go back to the previous page
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.history.back();
        });
    }
    
});
