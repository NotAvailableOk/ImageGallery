// document.addEventListener("DOMContentLoaded", () => {
//   // Function to generate, shuffle, and append images to the gallery
//   const closeBtn = document.getElementById("close-btn");
// // origal 🌿🌿🌿🌿🌿🌿 start
//   // function createGallery(galleryId, start, end) {
//   //   const gallery = document.getElementById(galleryId);
//   //   const images = [];

//   //   // Generate image paths dynamically using a loop
//   //   for (let i = start; i <= end; i++) {
//   //     images.push(`assets/images/${i}.webp`);
//   //   }

//   //   // Shuffle the images array
//   //   const shuffledImages = images.sort(() => 0.5 - Math.random());

//   //   // Add images to the gallery with click event to open card.html
//   //   shuffledImages.forEach((src) => {
//   //     const img = document.createElement("img");
//   //     img.src = src;
//   //     img.alt = "Gallery Image";

//   //     // Add click event listener
//   //     img.addEventListener("click", () => {
//   //       window.location.href = `../html/card.html?image=${src}`;
//   //     });

//   //     gallery.appendChild(img);
//   //   });
//   // }

//   // // Create galleries for different ranges of images
//   // createGallery("gallery1", 1, 84);
//   // createGallery("gallery2", 85, 168);
//   // createGallery("gallery3", 169, 247);
//   // createGallery("gallery4", 278, 334);

// // orignal end 🌿🌿🌿🌿🌿🌿🌿 

// // new❌❌❌❌
// function createGallery(galleryId, start, end, totalImages) {
//   const gallery = document.getElementById(galleryId);
//   const images = [];

//   // Generate image paths dynamically using a loop
//   for (let i = start; i <= totalImages; i++) {
//       images.push(`assets/images/${i}.webp`);
//   }

//   // Shuffle the images array
//   const shuffledImages = images.sort(() => 0.5 - Math.random());

//   // Add images to the gallery with click event to open card.html
//   shuffledImages.forEach((src) => {
//       const img = document.createElement("img");
//       img.src = src;
//       img.alt = "Gallery Image";

//       // Add click event listener
//       img.addEventListener("click", () => {
//           window.location.href = `../ImageGallery/html/card.html?image=${src}`;
//       });

//       gallery.appendChild(img);
//   });
// }

// // Update the gallery creation with the total image count
// const totalImages = 334; // Update this dynamically as images are added
// createGallery("gallery1", 1, 84, totalImages);
// createGallery("gallery2", 85, 168, totalImages);
// createGallery("gallery3", 169, 247, totalImages);
// createGallery("gallery4", 278, totalImages, totalImages);

// // new end ❌❌❌❌
//   // Close button functionality to go back to the previous page
//   if (closeBtn) {
//     closeBtn.addEventListener("click", () => {
//       window.history.back();
//     });
//   }
// });

// // theme
// const themeToggleBtn = document.getElementById("theme-toggle-btn");

// // Function to set the theme based on localStorage value
// function setTheme() {
//   const theme = localStorage.getItem("theme");
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark-mode");
//     themeToggleBtn.classList.remove("fa-moon");
//     themeToggleBtn.classList.add("fa-sun");
//   } else {
//     document.documentElement.classList.remove("dark-mode");
//     themeToggleBtn.classList.remove("fa-sun");
//     themeToggleBtn.classList.add("fa-moon");
//   }
// }

// // Call setTheme on load to apply the saved theme
// setTheme();

// themeToggleBtn.addEventListener("click", () => {
//   document.documentElement.classList.toggle("dark-mode");

//   // Save the user's preference to localStorage
//   if (document.documentElement.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }

//   // Update the theme toggle icon
//   setTheme();
// });

//  2nd ☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️

// document.addEventListener("DOMContentLoaded", () => {
//     function createGallery(galleryId, start, end, totalImages) {
//         const gallery = document.getElementById(galleryId);
//         let images = [];
        
//         // Check if shuffled images are in localStorage
//         const cachedImages = localStorage.getItem(`gallery-${galleryId}`);
        
//         if (cachedImages) {
//             images = JSON.parse(cachedImages); // Load from localStorage
//         } else {
//             // Generate image paths dynamically
//             for (let i = start; i <= totalImages; i++) {
//                 images.push(`assets/images/${i}.webp`);
//             }

//             // Shuffle images
//             const shuffledImages = images.sort(() => 0.5 - Math.random());
//             images = shuffledImages;

//             // Cache the shuffled images in localStorage
//             localStorage.setItem(`gallery-${galleryId}`, JSON.stringify(shuffledImages));
//         }

//         // Add images to the gallery with click event
//         images.forEach((src) => {
//             const img = document.createElement("img");
//             img.src = src;
//             img.alt = "Gallery Image";

//             // Cache image in browser Cache API 🌋
//             cacheImage(src);

//             img.addEventListener("click", () => {
//                 window.location.href = `../ImageGallery/html/card.html?image=${src}`;
//             });
//             gallery.appendChild(img);
//         });
//     }

//     // Function to cache images using Cache API 🌋
//     function cacheImage(imageUrl) {
//         if ('caches' in window) {
//             caches.open('image-gallery-cache').then((cache) => {
//                 cache.add(imageUrl).catch((error) => {
//                     console.error('Failed to cache image:', error);
//                 });
//             });
//         }
//     }

//     // Update gallery creation
//     const totalImages = 334;
//     createGallery("gallery1", 1, 84, totalImages);
//     createGallery("gallery2", 85, 168, totalImages);
//     createGallery("gallery3", 169, 247, totalImages);
//     createGallery("gallery4", 278, totalImages, totalImages);

//     // Dark mode logic remains the same
//     const themeToggleBtn = document.getElementById("theme-toggle-btn");

//     function setTheme() {
//         const theme = localStorage.getItem("theme");
//         if (theme === "dark") {
//             document.documentElement.classList.add("dark-mode");
//             themeToggleBtn.classList.remove("fa-moon");
//             themeToggleBtn.classList.add("fa-sun");
//         } else {
//             document.documentElement.classList.remove("dark-mode");
//             themeToggleBtn.classList.remove("fa-sun");
//             themeToggleBtn.classList.add("fa-moon");
//         }
//     }

//     setTheme();

//     themeToggleBtn.addEventListener("click", () => {
//         document.documentElement.classList.toggle("dark-mode");
//         localStorage.setItem("theme", document.documentElement.classList.contains("dark-mode") ? "dark" : "light");
//         setTheme();
//     });
// });




// 3re 🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿

document.addEventListener("DOMContentLoaded", () => {
    function createGallery(galleryId, start, end, totalImages) {
        const gallery = document.getElementById(galleryId);
        let images = [];

        // Check if shuffled images are in localStorage
        const cachedImages = localStorage.getItem(`gallery-${galleryId}`);
        if (cachedImages) {
            images = JSON.parse(cachedImages);
        } else {
            // Generate and shuffle image paths
            for (let i = start; i <= end; i++) {
                images.push(`assets/images/${i}.webp`);
            }
            images = images.sort(() => 0.5 - Math.random());
            localStorage.setItem(`gallery-${galleryId}`, JSON.stringify(images));
        }

        // Add images to the gallery and cache them
        images.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Gallery Image";
            gallery.appendChild(img);
        });
    }

    // Theme toggle logic
    const themeToggleBtn = document.getElementById("theme-toggle-btn");

    function setTheme() {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark-mode");
            themeToggleBtn.classList.remove("fa-moon");
            themeToggleBtn.classList.add("fa-sun");
        } else {
            document.documentElement.classList.remove("dark-mode");
            themeToggleBtn.classList.remove("fa-sun");
            themeToggleBtn.classList.add("fa-moon");
        }
    }

    setTheme();

    themeToggleBtn.addEventListener("click", () => {
        const isDarkMode = document.documentElement.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        setTheme();
    });

    // Create galleries
    const totalImages = 334;
    createGallery("gallery1", 1, 84, totalImages);
    createGallery("gallery2", 85, 168, totalImages);
    createGallery("gallery3", 169, 247, totalImages);
    createGallery("gallery4", 248, totalImages, totalImages);
});
