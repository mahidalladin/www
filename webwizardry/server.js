// script.js

function createSlideshow(slideshowId) {
    let currentSlide = 0;
    let slideshowPaused = false;
    const slideshowContainer = document.getElementById(slideshowId);
    const slides = document.querySelectorAll(`#${slideshowId} img`);

    function displaySlide() {
        if (slideshowPaused) {
            setTimeout(displaySlide, 2000); // Resume the slideshow after 2 seconds
            return;
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        currentSlide++;

        setTimeout(displaySlide, 300); // Change slide every 2 seconds
    }

    // Pause the slideshow on hover
    slideshowContainer.addEventListener("mouseover", () => {
        slideshowPaused = true;
    });

    // Resume the slideshow on mouseout
    slideshowContainer.addEventListener("mouseout", () => {
        slideshowPaused = false;
        displaySlide(); // Start the slideshow immediately when mouse leaves
    });

    // Initial start of the slideshow
    displaySlide();
}

// Start the slideshows
createSlideshow("slideshow1");
createSlideshow("slideshow2");
createSlideshow("slideshow3");
