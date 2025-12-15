// assets/js/load-components.js

function loadHTML(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id "${elementId}" not found`);
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                element.innerHTML = xhr.responseText;
            } else {
                tryFetch(elementId, filePath);
            }
        }
    };
    xhr.onerror = function () {
        tryFetch(elementId, filePath);
    };
    xhr.send(null);
}

function tryFetch(elementId, filePath) {
    if (window.fetch) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                    updateImagePaths(element);
                }
            })
            .catch(error => {
                console.error(`Error loading ${filePath}:`, error);
                console.warn('Use a local server (Live Server, http.server, etc.)');
            });
    } else {
        console.error(`Neither XMLHttpRequest nor fetch worked for ${filePath}`);
        console.warn('Use a local server to load the page');
    }
}

// Update all <img> src inside loaded components to include "assets/images/"
function updateImagePaths(container) {
    const imgs = container.querySelectorAll('img');
    imgs.forEach(img => {
        if (!img.src.includes('assets/images/')) {
            const fileName = img.getAttribute('src').split('/').pop();
            img.src = `assets/images/${fileName}`;
        }
    });
}

// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
});
