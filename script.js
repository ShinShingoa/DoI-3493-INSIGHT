// ==========================================
// MODAL SYSTEM
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('modal-overlay');
    const proceedButton = document.getElementById('proceed-button');
    const mainContent = document.getElementById('main-content');

    // Handle proceed button click
    proceedButton.addEventListener('click', function(e) {
        e.preventDefault();
        modalOverlay.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});

// ==========================================
// TAB SYSTEM
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');

            // Scroll to top when switching tabs
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// ==========================================
// COLLAPSIBLE SECTIONS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible-btn');

    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Toggle the content
            if (isActive) {
                content.classList.remove('active');
                this.textContent = this.textContent.replace('CLOSE:', 'ACCESS:');
            } else {
                content.classList.add('active');
                this.textContent = this.textContent.replace('ACCESS:', 'CLOSE:');
            }
        });
    });
});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ==========================================
// ANNOTATION POPUP CLICK PERSISTENCE
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const annotationLinks = document.querySelectorAll('.bi-r a, .bi-y a, .bi-g a, .bi-b a');
    let activePopup = null;
    let clickedPopup = null;

    annotationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const popup = this.closest('.bi-r, .bi-y, .bi-g, .bi-b').nextElementSibling;
            
            if (popup && popup.classList.contains('bi-popup')) {
                // If clicking the same popup that's already clicked, unclick it
                if (clickedPopup === popup) {
                    clickedPopup = null;
                    popup.classList.remove('clicked-popup');
                } else {
                    // Remove clicked state from previous popup
                    if (clickedPopup) {
                        clickedPopup.classList.remove('clicked-popup');
                    }
                    // Set new clicked popup
                    clickedPopup = popup;
                    popup.classList.add('clicked-popup');
                    // Show it
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.style.bottom = '5rem';
                }
            }
        });

        // Handle hover
        const parentHighlight = link.closest('.bi-r, .bi-y, .bi-g, .bi-b');
        if (parentHighlight) {
            parentHighlight.addEventListener('mouseenter', function() {
                const popup = this.nextElementSibling;
                if (popup && popup.classList.contains('bi-popup')) {
                    activePopup = popup;
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.style.bottom = '5rem';
                }
            });

            parentHighlight.addEventListener('mouseleave', function() {
                const popup = this.nextElementSibling;
                if (popup && popup.classList.contains('bi-popup') && popup !== clickedPopup) {
                    // Only hide if not clicked
                    popup.style.opacity = '0';
                    popup.style.visibility = 'hidden';
                    popup.style.bottom = '4rem';
                    if (activePopup === popup) {
                        activePopup = null;
                    }
                }
            });
        }
    });

    // Also handle popup hover
    document.querySelectorAll('.bi-popup').forEach(popup => {
        popup.addEventListener('mouseenter', function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
            this.style.bottom = '5rem';
        });

        popup.addEventListener('mouseleave', function() {
            if (this !== clickedPopup) {
                this.style.opacity = '0';
                this.style.visibility = 'hidden';
                this.style.bottom = '4rem';
            }
        });
    });

    // Close clicked popup when clicking outside
    document.addEventListener('click', function(e) {
        if (clickedPopup && 
            !e.target.closest('.bi-popup') && 
            !e.target.closest('.bi-r, .bi-y, .bi-g, .bi-b')) {
            clickedPopup.classList.remove('clicked-popup');
            clickedPopup.style.opacity = '0';
            clickedPopup.style.visibility = 'hidden';
            clickedPopup.style.bottom = '4rem';
            clickedPopup = null;
        }
    });
});

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== 'javascript:void(0)') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ==========================================
// EMAIL LOGO AXIS ALIGNMENT
// ==========================================
window.addEventListener("load", () => {
    const bottom = document.querySelector(".bottom-right-box");
    const top = document.querySelector(".top-right-box");

    if (!bottom || !top) return;

    const bottomRect = bottom.getBoundingClientRect();
    const topOffsetParent = top.offsetParent;

    if (!topOffsetParent) return;

    const parentRect = topOffsetParent.getBoundingClientRect();

    top.style.position = "absolute";
    top.style.left = `${bottomRect.left - parentRect.left}px`;
});

