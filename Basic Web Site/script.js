document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');

    // Create a simple animation that moves the text up and down
    let position = 0;
    let direction = 1;
    function animate() {
        position += direction;
        if (position > 20 || position < 0) {
            direction *= -1;
        }
        animatedText.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
