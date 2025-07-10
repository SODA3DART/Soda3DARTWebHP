// Logo Transition Animation
document.addEventListener('DOMContentLoaded', function() {
    // Check if current page is one of the special game pages
    const currentPath = window.location.pathname;
    if (currentPath.includes('SpecialSecretGame.html') || currentPath.includes('SpecialSecretGame2.html')) {
        return; // Don't apply logo transition on special game pages
    }

    // Get the logo element
    const logoElement = document.querySelector('.logo');
    if (!logoElement) return;

    // Create image element for initial logo
    const logoImg = document.createElement('img');
    logoImg.src = 'images/logo.webp';
    logoImg.alt = '3Dアートコースロゴ';
    logoImg.id = 'logo-image';
    logoImg.style.maxHeight = '50px';
    logoImg.style.transition = 'opacity 1s ease-in-out';

    // Keep the original text logo as a fallback
    const originalContent = logoElement.innerHTML;
    
    // Replace logo content with image
    logoElement.innerHTML = '';
    logoElement.appendChild(logoImg);
    
    // After 5 seconds, transition to the second logo
    setTimeout(function() {
        // Create a new image for the second logo
        const secondLogoImg = document.createElement('img');
        secondLogoImg.src = 'images/sodalogo.png';
        secondLogoImg.alt = '3Dアートコースロゴ';
        secondLogoImg.id = 'second-logo-image';
        secondLogoImg.style.maxHeight = '50px';
        secondLogoImg.style.opacity = '0';
        secondLogoImg.style.transition = 'opacity 1s ease-in-out';
        secondLogoImg.style.position = 'absolute';
        secondLogoImg.style.left = '0';
        secondLogoImg.style.top = '0';
        
        // Add the second logo
        logoElement.style.position = 'relative';
        logoElement.appendChild(secondLogoImg);
        
        // Fade out the first logo and fade in the second logo
        setTimeout(function() {
            logoImg.style.opacity = '0';
            secondLogoImg.style.opacity = '1';
        }, 100);
    }, 5000);

    // Preserve the click functionality for the Easter egg
    logoElement.addEventListener('click', function(e) {
        // This will allow the click event to bubble up to the existing click handler
    });
});