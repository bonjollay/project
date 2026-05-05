// Menangani scroll halus untuk navigasi
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset untuk tinggi navbar
                behavior: 'smooth'
            });
        }
    });
});

// Animasi Fade-in saat scroll (opsional namun mempercantik tampilan)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .card, .org-section').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Contoh sederhana untuk logika logo jika file tidak ditemukan
const logoImg = document.querySelector('.brand img');
logoImg.onerror = function() {
    this.style.display = 'none'; // Sembunyikan jika file logo.svg belum ada
};