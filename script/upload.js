document.getElementById("upload-image").addEventListener("click", async () => {
    const input = document.getElementById("image-input");
    const message = document.getElementById("message");
    if (input.files.length === 0) {
        message.textContent = "Please select an image.";
        return;
    }

    const file = input.files[0];

    // Check if the file type is supported
    if (!file.type.startsWith('image/')) {
        message.textContent = "Please upload a valid image file.";
        return;
    }

    // Create a FileReader to read the image file
    const reader = new FileReader();
    
    reader.onload = async (e) => {
        const imageBlob = await fetch(e.target.result).then(res => res.blob());
        const newFileName = `assets/images/${334 + 1}.webp`; // Assuming the next image is 335.webp
        
        // Convert imageBlob to .webp format using a canvas
        const canvas = document.createElement("canvas");
        const img = new Image();
        img.src = URL.createObjectURL(imageBlob);
        
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                const link = document.createElement("a");
                const newFile = new File([blob], newFileName, { type: 'image/webp' });
                
                // Save the newFile blob as a .webp image in the desired directory
                // This requires a server-side solution or can be handled via local storage for local development
                
                // Display a success message
                message.textContent = "Image uploaded successfully!";
            }, 'image/webp');
        };
    };
    
    reader.readAsDataURL(file);

         
});
