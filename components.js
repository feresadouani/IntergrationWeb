// Components content - works without server
const components = {
    header: `<header class="header">
    <div class="header-container">
        <!-- Logo -->
        <div class="logo">
            <a href="#" class="logo-link">
                <img src="images/mindupLogo.png" alt="mindup" class="logo-image">
            </a>
        </div>

        <!-- Navigation -->
        <nav class="nav">
            <a href="#" class="nav-link">Home</a>
            <div class="nav-separator"></div>
            <div class="nav-dropdown">
                <a href="#" class="nav-link dropdown-trigger">Stress <span class="material-icons dropdown-arrow">keyboard_arrow_down</span></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Mini Games</a>
                    <a href="#" class="dropdown-item">Daily Task</a>
                    <a href="#" class="dropdown-item">Podcast</a>
                    <a href="#" class="dropdown-item">Break</a>
                    <a href="#" class="dropdown-item">Live Streaming</a>
                </div>
            </div>
            <div class="nav-separator"></div>
            <div class="nav-dropdown">
                <a href="#" class="nav-link dropdown-trigger">Overload <span class="material-icons dropdown-arrow">keyboard_arrow_down</span></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Focus Mode</a>
                    <a href="#" class="dropdown-item">Agenda</a>
                    <a href="#" class="dropdown-item">tasks</a>
                </div>
            </div>
            <div class="nav-separator"></div>
            <div class="nav-dropdown">
                <a href="#" class="nav-link dropdown-trigger">Assistance <span class="material-icons dropdown-arrow">keyboard_arrow_down</span></a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Check in</a>
                    <a href="#" class="dropdown-item">Friend Support</a>
                    <a href="#" class="dropdown-item">Plans & Stats</a>
                    <a href="#" class="dropdown-item">Disscussion</a>
                    <a href="#" class="dropdown-item">Expert Support</a>
                </div>
            </div>
            <div class="nav-separator"></div>
            <a href="#" class="nav-link">Ai</a>
        </nav>

        <!-- Header Icons -->
        <div class="header-icons">
            <div class="icon-wrapper">
                <span class="material-icons">notifications</span>
            </div>
            <div class="icon-wrapper">
                <span class="material-icons">dark_mode</span>
            </div>
            <div class="icon-wrapper">
                <span class="material-icons">person</span>
            </div>
        </div>
    </div>
</header>`,

    footer: `<footer class="footer">
    <div class="footer-container">
        <div class="footer-logo">
            <a href="#" class="logo-link">
                <img src="images/mindupLogo.png" alt="mindup" class="logo-image">
            </a>
        </div>

        <div class="footer-contact">
            <p class="contact-label">Contact us :</p>
            <div class="social-icons">
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="#" class="social-icon">
                    <span class="material-icons">email</span>
                </a>
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </a>
            </div>
        </div>

        <div class="chat-icon">
            <span class="material-icons">chat_bubble</span>
        </div>
    </div>
</footer>`
};

// Function to load components
function loadComponents() {
    // Function to load from file with fallback
    function loadComponent(elementId, filePath, fallbackContent) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error('Element with id "' + elementId + '" not found');
            return;
        }

        // Try to load from file first (works with server)
        const xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    // Successfully loaded from file
                    element.innerHTML = xhr.responseText;
                } else {
                    // Failed to load from file, use fallback
                    element.innerHTML = fallbackContent;
                }
            }
        };
        xhr.onerror = function() {
            // Error loading file, use fallback
            element.innerHTML = fallbackContent;
        };
        xhr.send(null);
    }

    // Load header
    loadComponent('header-placeholder', 'header.html', components.header);

    // Load footer
    loadComponent('footer-placeholder', 'footer.html', components.footer);
}

// Function to initialize dropdowns
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (trigger && menu) {
            // Toggle dropdown on click
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadComponents();
        // Initialize dropdowns after a short delay to ensure header is loaded
        setTimeout(initDropdowns, 100);
    });
} else {
    // DOM is already loaded
    loadComponents();
    setTimeout(initDropdowns, 100);
}

// Re-initialize dropdowns when header is loaded (for dynamic loading)
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder && headerPlaceholder.querySelector('.nav-dropdown')) {
                initDropdowns();
            }
        }
    });
});

// Observe the header placeholder
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    observer.observe(headerPlaceholder, { childList: true, subtree: true });
}

