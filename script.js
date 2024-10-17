document.getElementById("start").addEventListener("click", function() {
    let h = parseInt(document.getElementById("hours").value) || 0;
    let m = parseInt(document.getElementById("minutes").value) || 0;
    let s = parseInt(document.getElementById("seconds").value) || 0;

    let totalSeconds = h * 3600 + m * 60 + s;

    const timerDisplay = document.getElementById("timer");
    const warningDisplay = document.getElementById("warning");

    function updateTimer() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        timerDisplay.textContent = 
            String(hours).padStart(2, "0") + ":" + 
            String(minutes).padStart(2, "0") + ":" + 
            String(seconds).padStart(2, "0");

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            warningDisplay.textContent = "Countdown Finished!";
            warningDisplay.style.display = "block";
        } else if (totalSeconds < 10) {
            warningDisplay.textContent = "Running out of time!!!";
            warningDisplay.style.display = "block";
        } else {
            warningDisplay.style.display = "none";
        }

        totalSeconds--;
    }

    updateTimer(); // Update immediately to avoid delay
    const timerInterval = setInterval(updateTimer, 1000);
});
