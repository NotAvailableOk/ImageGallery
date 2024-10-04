# Image Gallery Project

## Overview 
This is a responsive image gallery web application that offers multiple features to interact with images in different ways. The project includes separate pages to explore, view, manipulate, upload, share, and download images. Each feature is designed for both desktop and mobile viewing experiences.

## Features

1. **Home Page (Gallery)**
   - Displays a random assortment of images from the collection.
   - Users can click on images to view them in detail.

2. **Card Page**
   - When an image is clicked from the gallery, it opens in a new page (`card.html`).
   - The selected image is displayed in full view, with an option to return to the gallery using a close button.
   - Navigation bar available at the top (desktop) or bottom (mobile).

3. **Puzzle Page**
   - Allows users to solve a puzzle made from an image.
   - Randomly selects an image and divides it into several pieces for a fun interactive puzzle.

4. **Random Page**
   - Users can click the "Random" button to flicker through 10 random images.
   - Finally, the 11th random image will be displayed prominently.

5. **Slideshow Page**
   - Displays a slideshow of all images in the collection.
   - Users can manually navigate or let the slideshow automatically proceed.

6. **Upload Page**
   - Allows users to upload new images to the gallery.
   - The uploaded images are converted to `.webp` format and added dynamically to the collection.

## File Structure

```
├── index.html             // Home Page (Image Gallery)
├── card.html              // Detailed image view page (Card)
├── puzzle.html            // Puzzle feature page
├── random.html            // Random image display page
├── slideshow.html         // Slideshow feature page
├── upload.html            // Image upload page
├── assets/
│   ├── images/            // Image collection (1.webp, 2.webp, ..., 130.webp)
│   └── css/
│       ├── index.css       // index page specific styling
│       ├── card.css       // Card page specific styling
│       ├── puzzle.css     // Puzzle page specific styling
│       ├── random.css     // Random page specific styling
│       ├── slideshow.css  // Slideshow page specific styling
│       ├── upload.css     // Upload page specific styling
└── js/
    ├── index.js            // index page JavaScript logic
    ├── card.js            // Card page JavaScript logic
    ├── puzzle.js          // Puzzle feature logic
    ├── random.js          // Random image feature logic
    ├── slideshow.js       // Slideshow JavaScript logic
    ├── upload.js          // Image upload logic
```

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NotAvailableOk/ImageGallery.git
   ```
2. **Open `index.html`** in your browser to start the gallery.

## Usage

- **Browse and View Images**: Navigate to the gallery (`index.html`) to see all available images.
- **Random & Slideshow**: Use the random button or slideshow page for different viewing experiences.
- **Puzzle & Card**: Have fun solving puzzles or view images in detail.
- **Upload & Share**: Upload your own images or share images via link/download.

## Technologies Used

- **HTML, CSS, JavaScript**: Core web technologies used to build the user interface and interactivity.
- **Responsive Design**: CSS media queries for mobile and desktop compatibility.
- **WebP Format**: Used for efficient image display and optimization.

## License

This project is licensed under the MIT License.

## Author

- [DON'T COPY :)]

---
