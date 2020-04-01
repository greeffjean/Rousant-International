$(document).ready(function () {

  window.counterTop = document.getElementsByClassName('expertise-divider')[0].offsetTop;
  window.counterStarted = false;
  window.firstScrollEventHappened = false;

  $(window).scroll(function () {

    if (window.firstScrollEventHappened == true) {

      if ($(document).scrollTop() > 5) {
        $('.navigation').addClass('popnav');
      }
      else {
        $('.navigation').removeClass('popnav');
      }

      if ($(window).scrollTop() > window.counterTop) {
        setupCounter();
      }

    }

    if (window.firstScrollEventHappened == false) {
      window.firstScrollEventHappened = true;
    }
  });

  $('.value').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

  if ($(window).scrollTop() > window.counterTop) {
    setupCounter();
  };

}

);

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