/**
 * Common JavaScript functions for Soda3DARTWebHP
 * This file contains JavaScript functions that are shared across multiple pages
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    initMobileMenu();
});

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const nav = document.getElementById('nav');
    
    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}