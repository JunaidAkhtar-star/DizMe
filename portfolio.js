// JavaScript for the image slider
        const slideContainer = document.getElementById('imageSlider');
        const images = slideContainer.querySelectorAll('img');
        let slideIndex = 0;
        const totalSlides = images.length; // Includes the duplicate slide

        function moveSlide() {
            slideIndex++; // Increment index

            // Apply transition for normal slides
            slideContainer.classList.remove('no-transition');
            slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

            // If we've reached the duplicate slide, instantly reset to the first real slide
            if (slideIndex === totalSlides -1) { // If it's the last image (the duplicate of the first)
                setTimeout(() => {
                    slideContainer.classList.add('no-transition'); // Disable transition
                    slideContainer.style.transform = `translateX(0%)`; // Instantly go to first slide
                    slideIndex = 0; // Reset index
                }, 700); // This timeout should match the CSS transition duration (0.7s)
            }
        }

        // Set up interval for automatic sliding
        setInterval(moveSlide, 4500); // Matches original 4.5s animation