$(document).ready(function(){

  window.firstScrollEventHappened = false;

  $(window).scroll(function(){

    if(window.firstScrollEventHappened == true){

      if($(document).scrollTop() > 5){
        $('.navigation').addClass('popnav');
      }
      else {
        $('.navigation').removeClass('popnav');
      }
      
    }

    if(window.firstScrollEventHappened == false){
      window.firstScrollEventHappened = true;
    }
  });
  

});

