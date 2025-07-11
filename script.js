document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.remove("container");

    const loadingBar = document.getElementById('loadingBar');
    const percentage = document.getElementById('percentage');
    const bubbles = document.querySelectorAll('.bubble');
    let progress = 0;

    function updateProgress() {
        progress += 0.5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            setTimeout(() => {
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = "p2.html";
                }, 1000); // duración del fade-out
            }, 800);
        }

        loadingBar.style.width = `${progress}%`;
        percentage.textContent = `${Math.round(progress)}%`;

        if (progress >= 1) animateBubble(bubbles[0]);
        if (progress >= 50) animateBubble(bubbles[1]);
        if (progress >= 100) animateBubble(bubbles[2]);
    }

    function animateBubble(bubble) {
        if (!bubble.classList.contains('bubble-animate')) {
            bubble.classList.add('bubble-animate');
        }
    }

    const interval = setInterval(updateProgress, 50);
});
