var ring = document.getElementsByTagName('path')[0];
var range = document.getElementsByTagName('input')[0];
var text = document.getElementsByTagName('text')[0];
var toRadians = Math.PI / 180;
var r = 100;

function showTime(){
    // let timeDisplay = document.getElementById('timeDisplay');
    let currentTime;
    let h, m, s, seconds, time;
    // get general Date (with time) object
    time = new Date();
    // get individual values for each time unit
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    // put it all together
    seconds = s + (m * 60) + (h * 3600);
    currentTime = ((seconds / 86400) * 100).toFixed(2);

    // Put it all together into one string
    // timeDisplay.innerHTML = `${currentTime}` + '%';

    function draw() {
    // Update the wheel giving to it a value in degrees,
    // getted from the percentage of the input value
    // a.k.a. (value * 360) / 100
    var degrees = currentTime * 3.5999;
    // Convert the degrees value to radians
    var rad = degrees * toRadians;
    // Determine X and cut to 2 decimals
    var x = (Math.sin(rad) * r).toFixed(2);
    // Determine Y and cut to 2 decimals
    var y = -(Math.cos(rad) * r).toFixed(2);
    // The another half ring. Same as (deg > 180) ? 1 : 0
    var lenghty = Number(degrees > 180);
    // Moveto + Arcto
    var descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 1, lenghty, 1, x, y, 'z'];
    // Apply changes to the path
    ring.setAttribute('d', descriptions.join(' '));
    // Update the numeric display
    text.textContent = currentTime + '%';
    }

    // Translate the center axis to a half of total size
    ring.setAttribute('transform', 'translate(' + r + ', ' + r + ')');
    // Force to init the first time
    draw();

    setTimeout(showTime, 1000);
}

showTime();