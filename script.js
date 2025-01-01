document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    setTimeout(function() {
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';
    }, 500);
});

document.getElementById('clickText').addEventListener('click', function() {
    document.getElementById('spotifyImage').classList.add('fade-out');
    document.getElementById('textContainer').classList.add('fade-out');

    setTimeout(function() {
        document.getElementById('responseContainer').style.display = 'block';
    }, 500);
});

document.getElementById('yesBox').addEventListener('click', function() {
    document.getElementById('responseContainer').classList.add('fade-out');
    setTimeout(function() {
        document.querySelector('.heart').style.display = 'block'; // Show heart again
        document.querySelector('.heart').classList.remove ('fade-out');
    }, 1000); // Match this duration with the fade-out animation duration
});

document.getElementById('noBox').addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - 100); // 100 is the width of the box
    const randomY = Math.random() * (window.innerHeight - 50); // 50 is the height of the box
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});
