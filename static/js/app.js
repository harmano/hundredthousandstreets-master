$(document).ready(function(){
    $('.sidenav').sidenav();
  });


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

 // https://dribbble.com/shots/2955075-Neon-Sign-in-CSS
$(document).ready(function(){
    $('.sidenav').sidenav();
  });


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

 // https://dribbble.com/shots/2955075-Neon-Sign-in-CSS


 $(document).ready(function() {

          $("#owl-demo").owlCarousel({

              navigation : true, // Show next and prev buttons
              slideSpeed : 300,
              paginationSpeed : 400,
              singleItem:true

              // "singleItem:true" is a shortcut for:
              // items : 1,
              // itemsDesktop : false,
              // itemsDesktopSmall : false,
              // itemsTablet: false,
              // itemsMobile : false

          });

        });


setTimeout(function() {
  $('.inner div').addClass('done'); 
  
  setTimeout(function() {
    $('.inner div').addClass('page'); 
    
    setTimeout(function() {
    	$('.pageLoad').addClass('off'); 
      
      $('body, html').addClass('on'); 
      
      
  	}, 350)
  }, 300)
}, 600)

// Date picker for booking form
var givenDate = Date.parse(document.bookingForm.inputDate.value);
function getDate() {
  var givenDate = Date.parse(document.bookingForm.inputDate.value);
  if (!givenDate.isNaN) {
  
   // set hours, minutes, seconds, milisecconds to zero for a comparison
   // on date only
    givenDate = new Date(givenDate).setHours(0,0,0,0);
    var todaysDate = new Date().setHours(0, 0, 0, 0); 

    if (givenDate >= todaysDate) {
      result.innerHTML = 'We\'ll confirm this date soon';
      result.style.color = 'green';
    } else {
      result.innerHTML = "Please choose a future date.";
      result.style.color = 'red';
    }
  }
}


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

