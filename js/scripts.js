const actionButton = document.getElementById('action-btn');
const dynamicMessage = document.getElementById('dynamic-message');

actionButton.addEventListener('click', function() {
    // Browsers return background colors in 'rgb()' format when read via JavaScript
    if (document.body.style.backgroundColor === 'rgb(30, 30, 36)') {
        document.body.style.backgroundColor = '#ffffff'; // Switch to light mode background
        document.body.style.color = '#222222';
        actionButton.textContent = 'Click for Night Mode';
        dynamicMessage.textContent = "Back to the bright side!";
    } else {
        document.body.style.backgroundColor = 'rgb(30, 30, 36)'; // Switch to dark mode background (#1e1e24)
        document.body.style.color = '#ffffff';
        actionButton.textContent = 'Click for Day Mode';
        dynamicMessage.textContent = "Night Mode Active! Looking clean.";
    }
});
