document.getElementById('heart').addEventListener('click', function() {
    const heart = this;

    // Tambahkan kelas animasi fade-out
    heart.classList.add('fade-out');
    
    // Tunggu animasi selesai sebelum menyembunyikan elemen hati
    setTimeout(function() {
        heart.style.display = 'none'; // Sembunyikan hati setelah fade-out selesai

        // Tampilkan kontainer setelah hati menghilang
        const container = document.getElementById('container');
        container.style.display = 'block'; // Tampilkan container
        document.getElementById('spotifyImage').style.display = 'block';
        document.getElementById('textContainer').style.display = 'block';

        // Tambahkan animasi fade-in untuk konten
        document.getElementById('spotifyImage').classList.add('fade-in');
        document.getElementById('textContainer').classList.add('fade-in');
    }, 1000); // Durasi fade-out (1 detik)
});
