document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete before hiding the heart and showing the Spotify image and text
    setTimeout(function() {
        const heart = document.getElementById('heart');
        heart.style.display = 'none'; // Hide the heart after fade out

        const container = document.getElementById('container');
        container.style.display = 'block'; // Show the container
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';
        
        // Trigger fade-in animations
        document.getElementById('spotifyImage').classList.add('fade-in');
        document.getElementById('textContainer').classList.add('fade-in');
    }, 1000); // Match this duration with the fade-out animation duration
});

// Add event listener for the second line of text
document.getElementById('clickText').addEventListener('click', function() {
    // Fade out the Spotify image and text container
    document.getElementById('spotifyImage').classList.add('fade-out');
    document.getElementById('textContainer').classList.add('fade-out');
    
    // Optionally hide the container after fade out
    setTimeout(function() {
        const container = document.getElementById('container');
        container.style.display = 'none'; // Hide the container after fade out
    }, 1000); // Match this duration with the fade-out animation duration
});