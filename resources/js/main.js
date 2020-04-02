$(document).ready(function () {

  
  window.counterTop = document.getElementsByClassName('expertise-divider')[0].offsetTop;
  window.counterStarted = false;
  window.firstScrollEventHappened = false;

/* Scroll Functions */
  $(window).scroll(function () {
    if (window.firstScrollEventHappened == true) {
      /* trigger navbar animations */
      if ($(document).scrollTop() > 5) {
        $('.navigation').addClass('popnav');
      }
      else {
        $('.navigation').removeClass('popnav');
      }
      /* trigger counter function */
      if ($(window).scrollTop() > window.counterTop) {
        setupCounter();
      }
    }
    if (window.firstScrollEventHappened == false) {
      window.firstScrollEventHappened = true;
    }
  });


  /* Counter Function - refresh bug fix */
  if ($(window).scrollTop() > window.counterTop) {
    setupCounter();
  };
}
);


/* Counter Function - index.html */
function setupCounter() {
  if(window.counterStarted == false){

    var a = 0;
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
      window.counterStarted = true;
    }
  }
  
}