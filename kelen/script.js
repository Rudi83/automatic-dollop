document.addEventListener('DOMContentLoaded', () => {
    // Pilih elemen tombol dan audio
    const button = document.getElementById('cta-button');
    const modal = document.getElementById('myModal');
    const close = document.querySelector('.close');
    const audio = document.getElementById('background-music');

    // Memulai pemutaran musik saat halaman dimuat
    audio.play().catch(error => {
        // Tangani jika pemutaran musik tidak berhasil (misalnya, browser memblokir autoplay)
        console.log('Tidak dapat memutar musik:', error);
    });

    // Tambahkan event listener untuk klik pada tombol
    button.addEventListener('click', () => {
        // Tindakan saat tombol diklik
        alert('Jangan Tekan Kalo Ga Mau Tau');
        button.textContent = 'Maaci';
        
        // Menampilkan modal
        modal.style.display = 'block';

        // Menampilkan pesan
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            message.classList.add('visible');
        } else {
            message.classList.remove('visible');
            message.classList.add('hidden');
        }
        
        // Mengubah status musik
        if (audio.paused) {
            audio.play();
            button.textContent = 'Tunggu, musik diputar!';
        } else {
            audio.pause();
            button.textContent = 'Musik berhenti!';
        }
    });
    // Menutup modal saat tombol tutup diklik
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Menutup modal jika area di luar modal diklik
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});