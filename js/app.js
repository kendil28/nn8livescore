// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize all components
    initNavigation();
    initSidebar();
    initThemeToggle();
    initDropdown();
});

// Navigation Interactivity
function initNavigation() {
    const topNavItems = document.querySelectorAll('.nav-item');
    
    topNavItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            topNavItems.forEach(i => {
                i.classList.remove('nav-item-active', 'text-primary');
                i.classList.add('text-on-surface-variant');
            });
            
            // Add active class to clicked item
            this.classList.add('nav-item-active');
            this.classList.remove('text-on-surface-variant');
        });
    });
}

// Sidebar Navigation Interactivity
function initSidebar() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            sidebarItems.forEach(i => {
                i.classList.remove('sidebar-item-active');
                i.classList.add('text-on-surface');
            });
            
            // Add active class to clicked item
            this.classList.add('sidebar-item-active');
            this.classList.remove('text-on-surface');
        });
    });
}

// Dark/Light Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const logo = document.getElementById('logo');

    // Check for saved theme preference or default to dark
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('theme') || 'dark';
    } catch (e) {
        console.log('localStorage not available, using default theme');
    }
    
    htmlElement.classList.toggle('dark', savedTheme === 'dark');
    updateThemeIcon(savedTheme);
    updateLogo(savedTheme);

    themeToggle.addEventListener('click', function() {
        const isDark = htmlElement.classList.toggle('dark');
        const newTheme = isDark ? 'dark' : 'light';
        
        try {
            localStorage.setItem('theme', newTheme);
        } catch (e) {
            console.log('localStorage not available');
        }
        
        updateThemeIcon(newTheme);
        updateLogo(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? 'dark_mode' : 'light_mode';
    }

    function updateLogo(theme) {
        logo.src = theme === 'dark' ? 'assets/logonnsportdark.png' : 'assets/logonnsportlight.png';
    }
}

// Dropdown Menu Functionality
function initDropdown() {
    const moreButton = document.getElementById('more-button');
    const dropdown = document.getElementById('more-dropdown');
    const container = document.getElementById('more-menu-container');
    
    console.log('=== DROPDOWN INITIALIZATION ===');
    console.log('Button found:', !!moreButton, moreButton);
    console.log('Dropdown found:', !!dropdown, dropdown);
    console.log('Container found:', !!container, container);
    
    if (!moreButton || !dropdown || !container) {
        console.error('❌ Dropdown elements not found!');
        alert('Error: Dropdown elements not found! Check console.');
        return;
    }
    
    console.log('✅ All elements found');
    
    // Set initial state
    dropdown.style.display = 'none';
    dropdown.classList.remove('show');
    console.log('Initial state set: hidden');
    
    // Toggle dropdown on button click
    moreButton.addEventListener('click', function(e) {
        console.log('=== BUTTON CLICKED ===');
        e.preventDefault();
        e.stopPropagation();
        
        const isVisible = dropdown.style.display === 'block';
        
        console.log('Current visible:', isVisible);
        
        if (isVisible) {
            // Hide dropdown
            dropdown.style.display = 'none';
            dropdown.classList.remove('show');
            console.log('✅ Dropdown HIDDEN');
        } else {
            // Calculate position based on button
            const buttonRect = moreButton.getBoundingClientRect();
            const dropdownWidth = 250;
            
            // Position below button
            const top = buttonRect.bottom + 8;
            
            // Align to right of button
            const left = buttonRect.right - dropdownWidth;
            
            dropdown.style.top = top + 'px';
            dropdown.style.left = Math.max(10, left) + 'px'; // min 10px from left edge
            
            // Show dropdown
            dropdown.style.display = 'block';
            dropdown.classList.add('show');
            
            console.log('✅ Dropdown SHOWN');
            console.log('Button rect:', buttonRect);
            console.log('Dropdown position:', {top: dropdown.style.top, left: dropdown.style.left});
            console.log('Dropdown rect:', dropdown.getBoundingClientRect());
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!container.contains(e.target) && !dropdown.contains(e.target)) {
            if (dropdown.style.display === 'block' || dropdown.classList.contains('show')) {
                dropdown.style.display = 'none';
                dropdown.classList.remove('show');
                console.log('Dropdown closed (clicked outside)');
            }
        }
    });
    
    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Clicked inside dropdown');
    });
    
    console.log('✅ Dropdown initialized successfully');
    console.log('================================');
}
