function arabicToPersianNumerals(arabicNumber) {
  const arabicNumerals = '0123456789';
  const persianNumerals = '۰۱۲۳۴۵۶۷۸۹';

  for (let i = 0; i < arabicNumerals.length; i++) {
    arabicNumber = arabicNumber.replace(new RegExp(arabicNumerals[i], 'g'), persianNumerals[i]);
  }

  return arabicNumber;
}

// Set the date we're counting down to
var countDownDate = new Date("Oct 27, 2023 15:37:25").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var hoursStacked = Math.floor((days * 24) + hours);

  // Format hours, minutes, and seconds using Persian numerals
  var hoursFormatted = arabicToPersianNumerals(hoursStacked.toString()).padStart(2, '۰');
  var minutesFormatted = arabicToPersianNumerals(minutes.toString()).padStart(2, '۰');
  var secondsFormatted = arabicToPersianNumerals(seconds.toString()).padStart(2, '۰');

  // Display the result
  document.querySelector('.timer-value-hours').innerHTML = hoursFormatted;
  document.querySelector('.timer-value-minutes').innerHTML = minutesFormatted;
  document.querySelector('.timer-value-seconds').innerHTML = secondsFormatted;

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.timer-value-hours').innerHTML = '۰۰';
    document.querySelector('.timer-value-minutes').innerHTML = '۰۰';
    document.querySelector('.timer-value-seconds').innerHTML = '۰۰';
  }
}, 1000);

