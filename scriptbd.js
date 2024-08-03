function revealSections() {
    const sections = document.querySelectorAll('section');
    const reveal = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();
}
document.addEventListener('DOMContentLoaded', () => {
    revealSections();
});


