// Search functionality
document.querySelectorAll('.search-bar button').forEach(button => {
    button.addEventListener('click', function() {
        const searchInput = this.previousElementSibling.value.trim();
        if (searchInput) {
            console.log('Searching for:', searchInput);
            alert(`Searching for: ${searchInput}`);
            // You can replace this with actual search functionality
        }
    });
});

// Search on Enter key
document.querySelectorAll('.search-bar input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchValue = this.value.trim();
            if (searchValue) {
                console.log('Searching for:', searchValue);
                alert(`Searching for: ${searchValue}`);
            }
        }
    });
});

// Browse buttons - Category navigation
document.querySelectorAll('.category-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.parentElement.querySelector('h3').textContent;
        console.log('Navigating to:', category);
        alert(`Loading ${category}...`);
        // Navigate to category page
        window.location.href = `#${category.toLowerCase().replace(' ', '-')}`;
    });
});

// Download buttons
document.querySelectorAll('.item-card .btn-small').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const itemName = this.closest('.item-card').querySelector('h3').textContent;
        console.log('Downloading:', itemName);
        alert(`Downloading ${itemName}...\n(This is a demo)`);
    });
});

// Start Exploring button
document.querySelector('.hero .btn-primary').addEventListener('click', function() {
    const categoriesSection = document.querySelector('.categories');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
});

// Upload Now button
document.querySelector('.upload-section .btn-primary').addEventListener('click', function() {
    alert('Upload feature coming soon!\nYou will be able to share your creations with the community.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effects to item cards
document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    card.addEventListener('click', function() {
        const itemName = this.querySelector('h3').textContent;
        console.log('Opening:', itemName);
        alert(`Opening ${itemName} details...\n(Details page coming soon)`);
    });
});

// Lazy load images (basic implementation)
document.querySelectorAll('.item-image img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.item-card, .category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Mobile menu toggle (for potential future implementation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + S for search
    if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        document.querySelector('.search-bar input').focus();
    }
});

// Dynamic statistics update (simulated)
function updateStats() {
    const stats = document.querySelectorAll('.stat-box h3');
    stats.forEach(stat => {
        const value = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        if (!isNaN(value)) {
            // Simulate incremental growth
            const increment = Math.floor(Math.random() * 10) + 1;
            stat.textContent = stat.textContent.replace(/\d+/, value + increment);
        }
    });
}

// Update stats every 30 seconds (demo feature)
// setInterval(updateStats, 30000);

// Filter and search functionality (ready for expansion)
class ContentFilter {
    constructor() {
        this.items = Array.from(document.querySelectorAll('.item-card'));
        this.currentFilter = 'all';
    }

    filter(category) {
        this.currentFilter = category;
        this.items.forEach(item => {
            const itemCategory = item.querySelector('.category-tag').textContent.trim();
            if (category === 'all' || itemCategory.includes(category)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    }

    search(query) {
        const lowerQuery = query.toLowerCase();
        this.items.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('.description').textContent.toLowerCase();
            if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    }
}

// Initialize content filter
const contentFilter = new ContentFilter();

// Log when page is fully loaded
window.addEventListener('load', function() {
    console.log('CraftHub loaded successfully!');
    console.log('Available commands:');
    console.log('- contentFilter.filter("Mod") - Filter by category');
    console.log('- contentFilter.search("query") - Search items');
});

// Add rating functionality (demo)
document.querySelectorAll('.item-meta span:first-child').forEach(ratingElement => {
    ratingElement.addEventListener('click', function(e) {
        if (e.target.closest('.item-meta span:first-child')) {
            alert('Rating system coming soon!');
        }
    });
});

// Easter egg
let keySequence = '';
document.addEventListener('keydown', function(e) {
    keySequence += e.key.toLowerCase();
    if (keySequence.includes('crafthub')) {
        alert('⛏️ You found the CraftHub Easter Egg! Welcome, builder! 🎮');
        keySequence = '';
    }
    if (keySequence.length > 20) {
        keySequence = keySequence.substring(1);
    }
});
