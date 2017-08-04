// set the date we're counting down to
var target_date = new Date('Jul, 28, 2017').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (current_date - target_date) / 1000;
  
  
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
  
    var minute_string = '';
    if(minutes % 10 == 1 && minutes != 11) {
            minute_string += " minutu";
        }
        else if (minutes > 5 && minutes < 21) {
            minute_string += " minuta";
        }
        else if(minutes % 10 < 5 && minutes % 10 != 0) {
            minute_string += " minute";
        }
        else {
            minute_string += " minuta";
        }
     var seconds_string = 'sekundi';
     var hours_string = '';
       if(hours % 10 == 1 && hours != 11) {
            hours_string += " sat";
        }
        else if (hours > 5 && hours < 21) {
            hours_string += " sati";
        }
        else if(hours % 10 < 5 && hours % 10 != 0) {
            hours_string += " sata";
        }
        else {
            hours_string += " sati";
        }
        var days_string = '';
    if(days % 10 == 1 && days != 11) {
            days_string += " dan";
        }
        else {
            days_string += " dana";
        }
    // format countdown string + set tag value
    countdown.innerHTML = '<span class="days">' + days +  '<b>' + days_string + '</b></span> <span class="hours">' + hours + ' <b>' + hours_string + '</b></span> <span class="minutes">'
    + minutes + ' <b>' + minute_string + '</b></span> <span class="seconds">' + seconds + ' <b>' + seconds_string + '</b></span>';  
 
}, 1000);