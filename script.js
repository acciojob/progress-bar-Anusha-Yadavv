//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentCircle = 1;

    function updateButtons() {
        prevButton.disabled = currentCircle === 1;
        nextButton.disabled = currentCircle === circles.length;
    }

    function updateProgress() {
        circles.forEach((circle, index) => {
            circle.classList.toggle('active', index + 1 <= currentCircle);
        });
    }

    nextButton.addEventListener('click', () => {
        if (currentCircle < circles.length) {
            currentCircle++;
            updateProgress();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentCircle > 1) {
            currentCircle--;
            updateProgress();
            updateButtons();
        }
    });