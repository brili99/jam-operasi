// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    // return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;
let time_countdown = 0;
let last_time;
// Create function to modify innerHTML

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
    // startTime = Date.now() - elapsedTime;
    // timerInterval = setInterval(function printTime() {
    //     elapsedTime = Date.now() - startTime;
    //     print(timeToString(elapsedTime));
    // }, 10);

    last_time = Date.now() + time_countdown;
    timerInterval = setInterval(function printTime() {
        elapsedTime = last_time - Date.now();
        if (elapsedTime <= 0) {
            print("00:00:00");
            reset();
        } else {
            print(timeToString(elapsedTime));
        }
    }, 10);

    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

function save_data() {
    // time_countdown = document.getElementById("value_time_countdown").value;
    const [hours, minutes] = document.getElementById("value_time_countdown").value.split(':');
    // console.log(hours);
    // console.log(minutes);
    time_countdown = ((hours * 3600) + (minutes * 60)) * 1000;
    print(hours + ":" + minutes + ":00");
}

// Create function to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
let save_countdown = document.getElementById("save_countdown");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
save_countdown.addEventListener("click", save_data);
