// Function to load components from external HTML files
function loadComponents() {
    function loadComponent(elementId, filePath) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error('Element with id "' + elementId + '" not found');
            return;
        }

        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }
                return response.text();
            })
            .then((html) => {
                element.innerHTML = html;
            })
            .catch((error) => {
                console.error('Failed to load ' + filePath + ':', error);
            });
    }

    // Load header and footer from their HTML files
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
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

// Function to initialize mobile sidebar menu
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-sidebar-overlay');
    const closeBtn = document.querySelector('.mobile-close');

    if (!toggle || !sidebar) {
        console.log('Mobile menu elements not found:', { toggle: !!toggle, sidebar: !!sidebar });
        return;
    }

    function openMenu() {
        sidebar.classList.add('open');
        sidebar.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        // Empêcher le scroll du body quand le menu est ouvert
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        sidebar.classList.remove('open');
        sidebar.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        // Réactiver le scroll du body quand le menu est fermé
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked');
        if (sidebar.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadComponents();
        // Initialize header interactions after a short delay to ensure header is loaded
        setTimeout(function () {
            initDropdowns();
            initMobileMenu();
        }, 100);
    });
} else {
    // DOM is already loaded
    loadComponents();
    setTimeout(function () {
        initDropdowns();
        initMobileMenu();
    }, 100);
}

// Re-initialize dropdowns and mobile menu when header is loaded (for dynamic loading)
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                // Check if header content is loaded (either nav-dropdown or menu-toggle)
                const hasNavDropdown = headerPlaceholder.querySelector('.nav-dropdown');
                const hasMenuToggle = headerPlaceholder.querySelector('.menu-toggle');
                
                if (hasNavDropdown || hasMenuToggle) {
                    // Small delay to ensure DOM is fully ready
                    setTimeout(function() {
                        initDropdowns();
                        initMobileMenu();
                    }, 50);
                }
            }
        }
    });
});

// Observe the header placeholder
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    observer.observe(headerPlaceholder, { childList: true, subtree: true });
}

