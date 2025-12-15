// Function to load HTML file - works with both file:// and http:// protocols
function loadHTML(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element with id "' + elementId + '" not found');
        return;
    }

    // Try XMLHttpRequest first (works better with file://)
    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                element.innerHTML = xhr.responseText;
            } else {
                // Try fetch as fallback
                tryFetch(elementId, filePath);
            }
        }
    };
    xhr.onerror = function() {
        // If XHR fails, try fetch
        tryFetch(elementId, filePath);
    };
    xhr.send(null);
}

// Fetch fallback
function tryFetch(elementId, filePath) {
    if (window.fetch) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                }
            })
            .catch(error => {
                console.error('Error loading ' + filePath + ':', error);
                console.warn('Please use a local server (e.g., Live Server, Python http.server, etc.)');
            });
    } else {
        console.error('Neither XMLHttpRequest nor fetch worked for ' + filePath);
        console.warn('Please use a local server to load the page');
    }
}

// Load header and footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadHTML('header-placeholder', 'header.html');
        loadHTML('footer-placeholder', 'footer.html');
    });
} else {
    // DOM is already loaded
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
}

