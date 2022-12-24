// JavaScript for the gallery

// Get a reference to the image gallery container
const gallery = document.querySelector("#image-gallery");

// Get a reference to all of the images in the gallery
const images = gallery.querySelectorAll(".image");

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener("click", () => {
    // When an image is clicked, toggle the "expanded" class on the image
    image.classList.toggle("expanded");
  });
});
