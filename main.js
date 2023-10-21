// Set the date we're counting down to
var countDownDate = new Date("Oct 24, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  // Both days/hours and stacked hours are included
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var hoursStacked = Math.floor((days * 24) + hours);

  // Format hours, minutes, and seconds with at least 2 digits
  var hoursFormatted = hoursStacked.toString().padStart(2, '0');
  var minutesFormatted = minutes.toString().padStart(2, '0');
  var secondsFormatted = seconds.toString().padStart(2, '0');

  // Display the result in the element with id="demo"
  document.querySelector('.timer-value-hours').innerHTML = hoursFormatted;
  document.querySelector('.timer-value-minutes').innerHTML = minutesFormatted;
  document.querySelector('.timer-value-seconds').innerHTML = secondsFormatted;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getAnimations("demo").innerHTML = "EXPIRED";
  }
}, 1000);
