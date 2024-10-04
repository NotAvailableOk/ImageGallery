document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-btn');
    const selectedImageDiv = document.getElementById('selected-image');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');

    // Extract image URL from query params
    const params = new URLSearchParams(window.location.search);
    let imageUrl = params.get('image');

    // Fix the relative path if necessary
    if (imageUrl.startsWith('assets')) {
        imageUrl = '../' + imageUrl; // Adjust the relative path 🌋
    }

    if (imageUrl && selectedImageDiv) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Selected Image';
        img.style.objectFit = 'contain'; // Fit image without cropping
        selectedImageDiv.appendChild(img);

        // Download button functionality
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1); // Extract filename
            link.click();
        });

         // Share button functionality
         shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Check out this image!',
                        url: window.location.href,
                    });
                    console.log('Image shared successfully');
                } catch (error) {
                    console.error('Error sharing image:', error);
                }
            } else {
                alert('Share feature not supported in your browser.');
            }
        });


    }

    // Close button functionality to go back to the previous page
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.history.back();
        });
    }
});
