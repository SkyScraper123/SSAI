// script.js (for index.html)

document.addEventListener('DOMContentLoaded', () => {
    // Add a simple hover effect to the main feature cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
            card.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        });
    });

    // Navigation is now handled by standard href links in the HTML
    console.log("Static site landing page initialized.");
});
