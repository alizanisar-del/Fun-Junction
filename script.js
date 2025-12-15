document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation for hamburger lines
        hamburger.classList.toggle('toggle');
    });

    // Add active class style for mobile menu in CSS if needed, 
    // but for now let's just make sure it shows/hides.
    // I'll add a quick style injection for the mobile menu behavior since I might have missed the specific .active class styling in CSS for mobile view.
    // Actually, I'll add the JS logic to handle the display.
    
    // Product Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Add a small fade in animation
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add to Cart Functionality
    const cartCountEl = document.querySelector('.cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            cartCount++;
            cartCountEl.textContent = cartCount;
            
            // Animation for the button
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added';
            this.style.background = '#2ecc71'; // Green color
            
            // Shake animation for cart icon
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);

            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = ''; // Revert to original CSS
            }, 2000);
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
