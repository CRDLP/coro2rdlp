document.addEventListener('DOMContentLoaded', () => {
    // Custom heart cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    let currentSlide = 0;

    function nextSlide() {
        const slides = carousel.querySelectorAll('img');
        currentSlide = (currentSlide + 1) % slides.length;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 3000);

    // Musical notes animation
    const notes = document.querySelectorAll('.musical-notes .note');
    notes.forEach((note, index) => {
        note.style.animationDelay = `${index * 0.5}s`;
    });
});

// Custom CSS for cursor (to be added in CSS file)
const style = document.createElement('style');
style.innerHTML = `
    .custom-cursor {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(to right, var(--light-red), var(--light-blue));
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    }
`;
document.head.appendChild(style);
