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

