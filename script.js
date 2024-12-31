document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete before showing the message
    setTimeout(function() {
        document.getElementById('proposalMessage').style.display = 'block';
    }, 500); // Match this duration with the fade-out animation duration
});