document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('fade-out');
    
    // Tunggu animasi fade-out selesai sebelum mengganti elemen
    setTimeout(function() {
        const heart = document.getElementById('heart');
        heart.style.display = 'none'; // Sembunyikan hati setelah fade out

        const container = document.getElementById('container');
        container.style.display = 'block'; // Tampilkan container
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';
        
        // Tambahkan animasi fade-in
        document.getElementById('spotifyImage').classList.add('fade-in');
        document.getElementById('textContainer').classList.add('fade-in');
    }, 1000); // Durasi fade-out
});

// Tambahkan event listener untuk teks
document.getElementById('clickText').addEventListener('click', function() {
    // Tambahkan animasi fade-out ke logo Spotify dan teks
    document.getElementById('spotifyImage').classList.add('fade-out');
    document.getElementById('textContainer').classList.add('fade-out');
    
    // Sembunyikan container setelah fade-out selesai
    setTimeout(function() {
        const container = document.getElementById('container');
        container.style.display = 'none'; // Sembunyikan container setelah fade out
    }, 1000); // Durasi fade-out
});
