document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete before showing the Spotify image and text
    setTimeout(function() {
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';
    }, 500); // Match this duration with the fade-out animation duration
});

// Add event listener for the second line of text
document.getElementById('clickText').addEventListener('click', function() {
    // Fade out the image and text
    document.getElementById('spotifyImage').classList.add('fade-out');
    document.getElementById('textContainer').classList.add('fade-out');
});