document.addEventListener("DOMContentLoaded", () => {
  // Function to generate, shuffle, and append images to the gallery
  const closeBtn = document.getElementById("close-btn");
// origal 🌿🌿🌿🌿🌿🌿 start
  // function createGallery(galleryId, start, end) {
  //   const gallery = document.getElementById(galleryId);
  //   const images = [];

  //   // Generate image paths dynamically using a loop
  //   for (let i = start; i <= end; i++) {
  //     images.push(`assets/images/${i}.webp`);
  //   }

  //   // Shuffle the images array
  //   const shuffledImages = images.sort(() => 0.5 - Math.random());

  //   // Add images to the gallery with click event to open card.html
  //   shuffledImages.forEach((src) => {
  //     const img = document.createElement("img");
  //     img.src = src;
  //     img.alt = "Gallery Image";

  //     // Add click event listener
  //     img.addEventListener("click", () => {
  //       window.location.href = `../html/card.html?image=${src}`;
  //     });

  //     gallery.appendChild(img);
  //   });
  // }

  // // Create galleries for different ranges of images
  // createGallery("gallery1", 1, 84);
  // createGallery("gallery2", 85, 168);
  // createGallery("gallery3", 169, 247);
  // createGallery("gallery4", 278, 334);

// orignal end 🌿🌿🌿🌿🌿🌿🌿 

// new❌❌❌❌
function createGallery(galleryId, start, end, totalImages) {
  const gallery = document.getElementById(galleryId);
  const images = [];

  // Generate image paths dynamically using a loop
  for (let i = start; i <= totalImages; i++) {
      images.push(`assets/images/${i}.webp`);
  }

  // Shuffle the images array
  const shuffledImages = images.sort(() => 0.5 - Math.random());

  // Add images to the gallery with click event to open card.html
  shuffledImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Gallery Image";

      // Add click event listener
      img.addEventListener("click", () => {
          window.location.href = `../ImageGallery/html/card.html?image=${src}`;
      });

      gallery.appendChild(img);
  });
}

// Update the gallery creation with the total image count
const totalImages = 334; // Update this dynamically as images are added
createGallery("gallery1", 1, 84, totalImages);
createGallery("gallery2", 85, 168, totalImages);
createGallery("gallery3", 169, 247, totalImages);
createGallery("gallery4", 278, totalImages, totalImages);

// new end ❌❌❌❌
  // Close button functionality to go back to the previous page
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.history.back();
    });
  }
});

// theme
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Function to set the theme based on localStorage value
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

// Call setTheme on load to apply the saved theme
setTheme();

themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  // Save the user's preference to localStorage
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  // Update the theme toggle icon
  setTheme();
});
