document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let timerRunning = false;
    let startDate;

    function startTimer() {
        startDate = new Date();
        timerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timerRunning = false;
    }

    function resetTimer() {
        clearInterval(timer);
        timerRunning = false;
        document.getElementById('timer').innerText = '0:00';
    }

    function calculateDays(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
        console.log(diffDays); // Verifica Valor
        return diffDays;
    }
    
    function updateTimer() {
        const now = new Date();
        const elapsedTime = Math.floor((now - startDate) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        document.getElementById('timer').innerText = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        if (elapsedTime >= 60) {
            stopTimer();
            swal('Alerta', '¡Ha pasado 1 minuto!', 'warning');
        }
    }

    document.getElementById('start').addEventListener('click', () => {
        if (!timerRunning) {
            startTimer();
        }
    });

    document.getElementById('reset').addEventListener('click', resetTimer);

    document.getElementById('stop').addEventListener('click', stopTimer);

document.getElementById('calculate').addEventListener('click', () => {
    const date1Str = document.getElementById('date1').value;
    const date2Str = document.getElementById('date2').value;

    const date1Parts = date1Str.split('/');
    const date2Parts = date2Str.split('/');

    if (days < 50) {
        result.innerText = 'Menos de 50 días';
        swal('Alerta', 'Menos de 50 días', 'warning');
    } else {
        result.innerText = 'Más de 50 días';
    }
})
 
})