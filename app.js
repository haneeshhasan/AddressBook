// Immediately apply theme before page renders - moved to <head> section
const initThemeScript = `
(function() {
    const theme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(\`\${theme}-theme\`);
})();
`;

// Create and inject the script element in the head
const script = document.createElement('script');
script.textContent = initThemeScript;
document.head.insertBefore(script, document.head.firstChild);

// Theme Management
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Update toggle button state without re-adding theme class
    updateToggleButton(currentTheme === 'dark' ? 'light' : 'dark');
    
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark-theme');
        requestAnimationFrame(() => {
            document.documentElement.classList.remove('light-theme', 'dark-theme');
            const newTheme = isDark ? 'light' : 'dark';
            document.documentElement.classList.add(`${newTheme}-theme`);
            localStorage.setItem('theme', newTheme);
            updateToggleButton(newTheme === 'dark' ? 'light' : 'dark');
        });
    }
    
    function updateToggleButton(mode) {
        requestAnimationFrame(() => {
            const icon = themeToggle.querySelector('i');
            const text = themeToggle.querySelector('span');
            
            if (mode === 'light') {
                icon.className = 'ph-sun';
                text.textContent = 'Light Mode';
            } else {
                icon.className = 'ph-moon';
                text.textContent = 'Dark Mode';
            }
        });
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

// Search Functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return; // Skip if search input doesn't exist on page
    
    const tableBody = document.querySelector('#contactList tbody');
    const rows = tableBody.getElementsByTagName('tr');
    const emptyState = document.getElementById('emptyState');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        let hasResults = false;

        Array.from(rows).forEach(row => {
            if (row.classList.contains('empty-state')) return;

            const firstName = row.cells[0].textContent.toLowerCase();
            const lastName = row.cells[1].textContent.toLowerCase();
            const email = row.cells[2].textContent.toLowerCase();
            const phone = row.cells[3].textContent.toLowerCase();
            const address = row.cells[4].textContent.toLowerCase();

            if (firstName.includes(searchTerm) || 
                lastName.includes(searchTerm) || 
                email.includes(searchTerm) || 
                phone.includes(searchTerm) || 
                address.includes(searchTerm)) {
                row.style.display = '';
                hasResults = true;
            } else {
                row.style.display = 'none';
            }
        });

        if (hasResults) {
            emptyState.style.display = 'none';
        } else {
            emptyState.style.display = 'table-row';
        }
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            this.dispatchEvent(new Event('input'));
        }
    });
}

// Edit Contact Functionality
function editContact(button) {
    const row = button.closest('tr');
    
    const contactData = {
        firstName: row.cells[0].textContent,
        lastName: row.cells[1].textContent,
        email: row.cells[2].textContent,
        phone: row.cells[3].textContent,
        address: row.cells[4].textContent
    };
    
    localStorage.setItem('editContactData', JSON.stringify(contactData));
    window.location.href = 'edit.html';
}

// Edit Form Functionality
function initEditForm() {
    const editForm = document.getElementById('editContact');
    if (!editForm) return; // Skip if edit form doesn't exist on page
    
    const contactData = JSON.parse(localStorage.getItem('editContactData'));
    
    if (contactData) {
        document.getElementById('firstName').value = contactData.firstName;
        document.getElementById('lastName').value = contactData.lastName;
        document.getElementById('email').value = contactData.email;
        document.getElementById('phone').value = contactData.phone;
        document.getElementById('address').value = contactData.address;
        
        localStorage.removeItem('editContactData');
    }
    
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Contact updated successfully!');
        window.location.href = 'view.html';
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSearch();
    initEditForm();
}); 