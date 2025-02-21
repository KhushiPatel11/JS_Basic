let [seconds, minutes, hours, microseconds] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    debugger
    microseconds++;
    if (microseconds == 100) {
        microseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = microseconds < 10 ? "0" + microseconds : microseconds;

    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function watchStart() {
    debugger
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchStop() {
    debugger
    clearInterval(timer);
}

function watchReset() {
    debugger
    clearInterval(timer);
    [seconds, minutes, hours, microseconds] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:00";
}
