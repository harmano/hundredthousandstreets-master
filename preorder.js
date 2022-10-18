// Set the date we're counting down to
var countDownDate = new Date("oct 30, 2022 10:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        [...document.getElementsByClassName("timercountdown")].forEach(e => e.innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds + "");
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          [...document.getElementsByClassName("timercountdown")].forEach(e=>e.innerHTML = "EXPIRED");
        }
      }, 1000);

racingstripe = 2;
colorChange = 3;
customDecal = 1;
hoodroofwrap = 0;


[...document.getElementsByClassName("racingstripe")].forEach(e => e.innerHTML = '(' + racingstripe + ')' + ' remaining');
[...document.getElementsByClassName("colorchange")].forEach(e => e.innerHTML = '(' + colorChange + ')' + ' remaining');
[...document.getElementsByClassName("customdecal")].forEach(e => e.innerHTML = '(' + customDecal + ')' + ' remaining');
[...document.getElementsByClassName("hoodroofwrap")].forEach(e => e.innerHTML = 'SOLD OUT');

