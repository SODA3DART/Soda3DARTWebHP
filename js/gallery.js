/**
 * Gallery-specific JavaScript functions for Soda3DARTWebHP
 * This file contains JavaScript functions specific to the gallery page
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize filter functionality
    initFilterFunctionality();
    
    // Initialize lightbox functionality
    initLightbox();
    
    // Initialize thumbnail position
    initThumbnailPosition();
    
    // Initialize hover image change for special artworks
    initHoverImageChange();
});

/**
 * Initialize filter functionality for gallery items
 */
function initFilterFunctionality() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallerySections = document.querySelectorAll('.gallery-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter processing
            const filterValue = this.getAttribute('data-filter');

            // Object to manage section visibility
            const sectionVisibility = {};

            // First check all items to see if there are items to display in each section
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const parentSection = item.closest('.gallery-section');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    // This section has items to display
                    if (parentSection) {
                        sectionVisibility[parentSection.querySelector('.section-title').textContent] = true;
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            // Set section visibility
            gallerySections.forEach(section => {
                const sectionTitle = section.querySelector('.section-title').textContent;
                if (filterValue === 'all' || sectionVisibility[sectionTitle]) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize lightbox functionality
 */
function initLightbox() {
    // Get the lightbox modal
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxGallery = document.getElementById('lightboxGallery');
    const lightboxDescription = document.getElementById('lightboxDescription');

    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-image img, .video-container img');

    // Data structure for artworks with multiple images and descriptions
    const specialArtworks = {
        // ポピー artwork
        "ポピー": {
            images: [
                "images/gallery/Poppy.png", // Main image
                "images/gallery/miniPoppy.png", // Additional image 1
                "images/gallery/PoppySettnings.png", // Additional image 2
                "images/gallery/Poppyw.png"
            ],
            description: `
                <h3>ポピー - キャラクター設定</h3>
                <p>キャラクターデザインの課題として作成したオリジナルゲームのキャラクター「ポピー」です。</p>
                <p>ポピーは架空のRPGゲームの主人公で、魔法と剣術を使いこなす少女戦士です。</p>
                <p>赤い髪と青い瞳が特徴的で、冒険の中で様々な仲間と出会いながら成長していきます。</p>
                <p>このモデルはFusion 360とBlenderを使用して作成し、ゲームエンジンへの実装も行いました。</p>
            `
        }
        // Add more special artworks here as needed
    };

    // Add click event to all gallery images
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const artworkTitle = getArtworkTitle(this);
            openLightbox(this.src, artworkTitle);
        });
    });

    // Close the lightbox when clicking on the close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            closeLightbox();
        });
    }

    // Close the lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Add keyboard support for closing the lightbox with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    /**
     * Function to check if an artwork is special (has multiple images)
     */
    function isSpecialArtwork(title) {
        return specialArtworks.hasOwnProperty(title);
    }

    /**
     * Function to get artwork title from image element
     */
    function getArtworkTitle(imageElement) {
        const galleryItem = imageElement.closest('.gallery-item');
        if (galleryItem) {
            const titleElement = galleryItem.querySelector('.gallery-title');
            return titleElement ? titleElement.textContent : null;
        }
        return null;
    }

    /**
     * Function to open the lightbox with animation
     */
    function openLightbox(imageSrc, artworkTitle) {
        if (!lightbox || !lightboxImg) return;

        // Clear previous gallery and description
        if (lightboxGallery) lightboxGallery.innerHTML = '';
        if (lightboxDescription) lightboxDescription.innerHTML = '';

        // Set the main image source
        lightboxImg.src = imageSrc;

        // Check if this is a special artwork with multiple images
        if (artworkTitle && isSpecialArtwork(artworkTitle)) {
            const artwork = specialArtworks[artworkTitle];

            // Add thumbnail gallery
            if (lightboxGallery) {
                artwork.images.forEach((imgSrc, index) => {
                    const thumbnail = document.createElement('img');
                    thumbnail.src = imgSrc;
                    thumbnail.alt = `${artworkTitle} - Image ${index + 1}`;
                    if (imgSrc === imageSrc) {
                        thumbnail.classList.add('active');
                    }

                    thumbnail.addEventListener('click', function() {
                        // Update main image
                        lightboxImg.src = imgSrc;

                        // Update active state
                        lightboxGallery.querySelectorAll('img').forEach(img => {
                            img.classList.remove('active');
                        });
                        thumbnail.classList.add('active');
                    });

                    lightboxGallery.appendChild(thumbnail);
                });
            }

            // Add description
            if (lightboxDescription) {
                lightboxDescription.innerHTML = artwork.description;
            }
        }

        // Force a reflow before adding the active class for the animation to work properly
        void lightbox.offsetWidth;

        // Add the active class to trigger animations
        lightbox.classList.add('active');

        // Add artistic animation class to body to enhance the experience
        document.body.classList.add('viewing-art');
    }

    /**
     * Function to close the lightbox with animation
     */
    function closeLightbox() {
        if (!lightbox) return;
        
        // Remove the active class to trigger closing animations
        lightbox.classList.remove('active');

        // Remove artistic animation class from body
        document.body.classList.remove('viewing-art');
    }
}

/**
 * Initialize thumbnail position based on data-position attribute
 */
function initThumbnailPosition() {
    const galleryImages = document.querySelectorAll('.gallery-image img');

    galleryImages.forEach(image => {
        const position = image.getAttribute('data-position');
        if (position) {
            image.style.objectPosition = position;
        } else {
            // Default position if not specified
            image.style.objectPosition = 'center 30%';
        }
    });
}

/**
 * Initialize hover image change for special artworks
 */
function initHoverImageChange() {
    // Find all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Data structure for artworks with multiple images
    const specialArtworks = {
        // ポピー artwork
        "ポピー": {
            images: [
                "images/gallery/Poppy.png", // Main image
                "images/gallery/miniPoppy.png", // Additional image 1
                "images/gallery/PoppySettnings.png", // Additional image 2
                "images/gallery/Poppyw.png"
            ]
        }
        // Add more special artworks here as needed
    };

    galleryItems.forEach(item => {
        const titleElement = item.querySelector('.gallery-title');
        if (!titleElement) return;

        const title = titleElement.textContent;

        // Check if this is a special artwork with multiple images
        if (isSpecialArtwork(title)) {
            const imgElement = item.querySelector('.gallery-image img');
            if (!imgElement) return;

            // Store the original image source
            const originalSrc = imgElement.src;

            // Get the artwork data
            const artwork = specialArtworks[title];

            // If there are additional images (more than just the main one)
            if (artwork.images.length > 1) {
                // Use the second image (index 1) for hover
                const hoverSrc = artwork.images[1];

                // Add hover event listeners
                item.addEventListener('mouseenter', function() {
                    imgElement.src = hoverSrc;
                });

                item.addEventListener('mouseleave', function() {
                    imgElement.src = originalSrc;
                });
            }
        }
    });

    /**
     * Function to check if an artwork is special (has multiple images)
     */
    function isSpecialArtwork(title) {
        return specialArtworks.hasOwnProperty(title);
    }
}