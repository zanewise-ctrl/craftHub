// Example data for mods, packs, and shaders
const exampleData = {
    mods: [
        {
            name: "Better Ores Mod",
            category: "🔧 Mod",
            description: "Adds new ores and mining mechanics to Minecraft",
            rating: 4.8,
            reviews: 1200,
            downloads: 125300,
            image: "https://via.placeholder.com/300x200?text=Better+Ores",
            downloadLink: "example-better-ores.jar"
        },
        {
            name: "Exploration Plus",
            category: "🔧 Mod",
            description: "Discover new biomes, dungeons, and adventures",
            rating: 4.6,
            reviews: 754,
            downloads: 89500,
            image: "https://via.placeholder.com/300x200?text=Exploration+Plus",
            downloadLink: "example-exploration-plus.jar"
        },
        {
            name: "Magic Essentials",
            category: "🔧 Mod",
            description: "Add magical spells and enchantments to your world",
            rating: 4.7,
            reviews: 956,
            downloads: 142800,
            image: "https://via.placeholder.com/300x200?text=Magic+Essentials",
            downloadLink: "example-magic-essentials.jar"
        },
        {
            name: "Building Tools Pro",
            category: "🔧 Mod",
            description: "Enhanced building tools and utilities for creative mode",
            rating: 4.9,
            reviews: 2100,
            downloads: 318500,
            image: "https://via.placeholder.com/300x200?text=Building+Tools",
            downloadLink: "example-building-tools.jar"
        }
    ],
    packs: [
        {
            name: "Crystal Clear Pack",
            category: "🎨 Resource Pack",
            description: "High-definition textures for ultimate clarity",
            rating: 4.9,
            reviews: 890,
            downloads: 98200,
            image: "https://via.placeholder.com/300x200?text=Crystal+Clear",
            downloadLink: "example-crystal-clear.zip"
        },
        {
            name: "Realistic Nature Pack",
            category: "🎨 Resource Pack",
            description: "Ultra-realistic textures for a natural Minecraft experience",
            rating: 4.8,
            reviews: 645,
            downloads: 76500,
            image: "https://via.placeholder.com/300x200?text=Realistic+Nature",
            downloadLink: "example-realistic-nature.zip"
        },
        {
            name: "Cartoon Craft Pack",
            category: "🎨 Resource Pack",
            description: "Bright and colorful cartoon-style textures",
            rating: 4.6,
            reviews: 523,
            downloads: 54300,
            image: "https://via.placeholder.com/300x200?text=Cartoon+Craft",
            downloadLink: "example-cartoon-craft.zip"
        },
        {
            name: "Dark Fantasy Pack",
            category: "🎨 Resource Pack",
            description: "Dark, gothic textures for an immersive fantasy experience",
            rating: 4.7,
            reviews: 734,
            downloads: 112600,
            image: "https://via.placeholder.com/300x200?text=Dark+Fantasy",
            downloadLink: "example-dark-fantasy.zip"
        }
    ],
    shaders: [
        {
            name: "Ultra Realistic Shaders",
            category: "✨ Shader",
            description: "Photorealistic lighting and shadows",
            rating: 4.7,
            reviews: 2100,
            downloads: 256800,
            image: "https://via.placeholder.com/300x200?text=Ultra+Realistic",
            downloadLink: "example-ultra-realistic.zip"
        },
        {
            name: "Lightweight Glow",
            category: "✨ Shader",
            description: "Optimized shader with beautiful glow effects",
            rating: 4.5,
            reviews: 456,
            downloads: 34200,
            image: "https://via.placeholder.com/300x200?text=Lightweight+Glow",
            downloadLink: "example-lightweight-glow.zip"
        },
        {
            name: "Cyberpunk Vibes",
            category: "✨ Shader",
            description: "Futuristic neon lighting effects for Minecraft",
            rating: 4.8,
            reviews: 1850,
            downloads: 198500,
            image: "https://via.placeholder.com/300x200?text=Cyberpunk+Vibes",
            downloadLink: "example-cyberpunk-vibes.zip"
        },
        {
            name: "Sunset Dreams",
            category: "✨ Shader",
            description: "Beautiful warm lighting reminiscent of sunsets",
            rating: 4.6,
            reviews: 678,
            downloads: 87400,
            image: "https://via.placeholder.com/300x200?text=Sunset+Dreams",
            downloadLink: "example-sunset-dreams.zip"
        }
    ]
};

// Function to show a category view
function showCategory(category) {
    // Hide home sections
    document.getElementById('featured-home').style.display = 'none';
    document.getElementById('browse').style.display = 'none';
    
    // Hide all category views
    document.getElementById('mods-view').style.display = 'none';
    document.getElementById('packs-view').style.display = 'none';
    document.getElementById('shaders-view').style.display = 'none';
    
    // Show selected category
    if (category === 'mods') {
        document.getElementById('mods-view').style.display = 'block';
        renderItems('modsGrid', exampleData.mods);
    } else if (category === 'packs') {
        document.getElementById('packs-view').style.display = 'block';
        renderItems('packsGrid', exampleData.packs);
    } else if (category === 'shaders') {
        document.getElementById('shaders-view').style.display = 'block';
        renderItems('shadersGrid', exampleData.shaders);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to go back to home
function backToHome() {
    document.getElementById('mods-view').style.display = 'none';
    document.getElementById('packs-view').style.display = 'none';
    document.getElementById('shaders-view').style.display = 'none';
    document.getElementById('featured-home').style.display = 'block';
    document.getElementById('browse').style.display = 'block';
    window.scrollTo(0, 0);
}

// Function to render items in a grid
function renderItems(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = items.map(item => `
        <div class="item-card">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="category-tag">${item.category}</p>
                <p class="description">${item.description}</p>
                <div class="item-meta">
                    <span>⭐ ${item.rating} (${item.reviews.toLocaleString()} reviews)</span>
                    <span>📥 ${(item.downloads / 1000).toFixed(1)}K downloads</span>
                </div>
                <button class="btn btn-small" onclick="downloadItem('${item.name}', '${item.downloadLink}')">Download</button>
            </div>
        </div>
    `).join('');
}

// Function to download an item
function downloadItem(itemName, downloadLink) {
    alert(`Downloading ${itemName}...\n\nFile: ${downloadLink}\n\n(Replace this with your actual download link in the code)`);
    console.log(`Download initiated for: ${itemName}`);
    console.log(`Download link: ${downloadLink}`);
    // You can replace the alert with an actual download by uncommenting:
    // window.location.href = downloadLink;
}

// Function to upload content
function uploadContent() {
    alert('Upload feature coming soon!\nYou will be able to share your creations with the community.');
}

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search functionality
document.querySelectorAll('.search-bar button').forEach(button => {
    button.addEventListener('click', function() {
        const searchInput = this.previousElementSibling.value.trim();
        if (searchInput) {
            console.log('Searching for:', searchInput);
            alert(`Searching for: ${searchInput}`);
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

// Observe all cards on load
window.addEventListener('load', function() {
    document.querySelectorAll('.item-card, .category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    console.log('CraftHub loaded successfully!');
    console.log('Example items loaded and ready for replacement with your real download links!');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + S for search
    if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        document.querySelector('.search-bar input').focus();
    }
});

// Filter functionality for category pages
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

const contentFilter = new ContentFilter();

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
