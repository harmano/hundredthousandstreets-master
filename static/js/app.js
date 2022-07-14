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
      
      
  	}, 500)
  }, 500)
}, 300)