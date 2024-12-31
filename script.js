document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    // Wait for the fade-out animation to complete before showing the Spotify image and text
    setTimeout(function() {
        const container = document.getElementById('container');
        container.style.display = 'block'; // Show the container
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';
        
        // Trigger fade-in animations
        document.getElementById('spotifyImage').classList.add('fade-in');
        document.getElementById('textContainer').classList.add('fade-in');
    }, 1000); // Match this duration with the fade