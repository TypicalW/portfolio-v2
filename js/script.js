document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // 1. Check for saved preference or system default
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateButtonText(savedTheme);

    // 2. Click Event
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
    }

    function updateButtonText(theme) {
        if (toggleBtn) {
            toggleBtn.innerText = theme === 'dark' ? '[ TOGGLE_LIGHT_PROTOCOL ]' : '[ TOGGLE_DARK_PROTOCOL ]';
        }
    }
});