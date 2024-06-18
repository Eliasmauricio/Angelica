document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = 'none';
        }
    });
});