const boxes = document.querySelectorAll('.box');

const animations = ['fadeInMove', 'fadeInScale', 'fadeInRotate']; // Список анімацій

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Випадковий вибір анімації
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            entry.target.classList.add(randomAnimation);
        }
    });
}, { threshold: 0.5 });

boxes.forEach(box => observer.observe(box));
