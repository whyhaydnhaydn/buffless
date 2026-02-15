// BuffLess Website - Main JavaScript File
// Handles all interactive features without backend API calls

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for Fade In Animations
    const fadeInElements = document.querySelectorAll('.fade-in-up, .fade-in-section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Product Filter Functionality (Shop Page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Filter products (placeholder functionality)
                productCards.forEach(card => {
                    if (category === 'all') {
                        card.style.display = 'block';
                    } else {
                        // In a real implementation, you would check card's data-category attribute
                        card.style.display = 'block';
                    }
                });
            });
        });
    }

    // Search Functionality (Shop Page)
    const searchInput = document.getElementById('search-input');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();

            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                const productDesc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

                if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Star Rating Interaction (Product Detail Page)
    const starButtons = document.querySelectorAll('.star-btn');
    let selectedRating = 0;

    if (starButtons.length > 0) {
        starButtons.forEach((button, index) => {
            button.addEventListener('click', function() {
                selectedRating = index + 1;
                updateStarDisplay(selectedRating);
            });

            button.addEventListener('mouseenter', function() {
                updateStarDisplay(index + 1);
            });
        });

        const starContainer = starButtons[0]?.parentElement;
        if (starContainer) {
            starContainer.addEventListener('mouseleave', function() {
                updateStarDisplay(selectedRating);
            });
        }
    }

    function updateStarDisplay(rating) {
        starButtons.forEach((button, index) => {
            const star = button.querySelector('svg');
            if (index < rating) {
                star.classList.remove('fill-gray-200', 'text-gray-200');
                star.classList.add('fill-red-600', 'text-red-600');
            } else {
                star.classList.remove('fill-red-600', 'text-red-600');
                star.classList.add('fill-gray-200', 'text-gray-200');
            }
        });
    }

    // Form Submission Handlers (Newsletter, Reviews)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show success message
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;

            button.innerHTML = '<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...';
            button.disabled = true;

            // Simulate API call
            setTimeout(() => {
                button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Success!';
                button.classList.add('bg-green-600');
                button.classList.remove('bg-red-600');

                // Reset form
                this.reset();

                // Reset button after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('bg-green-600');
                    button.classList.add('bg-red-600');
                    button.disabled = false;
                }, 2000);
            }, 1500);
        });
    });

    // Add to Cart Button Handler
    const addToCartButtons = document.querySelectorAll('button:not([type])');

    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                const originalText = this.innerHTML;

                // Show adding animation
                this.innerHTML = '<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
                this.disabled = true;

                setTimeout(() => {
                    this.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Added!';

                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.disabled = false;
                    }, 1500);
                }, 1000);
            });
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Product Card Click Handler
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking a button
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }

            // Navigate to product detail page
            window.location.href = 'product-detail.html';
        });
    });

    // Image Lazy Loading
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Newsletter Form Success Message
    const newsletterForm = document.querySelector('form[onsubmit]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing! (This is a demo - no actual subscription was created)');
            this.reset();
        });
    }

    // Console Log for Developers
    console.log('%c BuffLess Website ', 'background: #E10600; color: white; font-size: 20px; padding: 10px;');
    console.log('%c Static HTML Version - No Backend API Calls ', 'background: #333; color: white; font-size: 12px; padding: 5px;');
    console.log('This is a static demo. All interactions are frontend-only.');

});

// Utility Functions

// Format Currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

// Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white transform translate-x-0 transition-transform duration-300`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Validate Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
