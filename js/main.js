$(document).ready(function () {
  $(".client-carousel").owlCarousel({
    item: 1,
    rtl: true,
    stagePadding: 0,
    responsiveClass: true,
    center: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true
      },
      600: {
        items: 2,
        nav: false,
        loop: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
        margin: 20
      }
    }

  });
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.addClass('active highlight');
      }
    } else if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {

      if ($this.val() === '') {
        label.removeClass('highlight');
      } else if ($this.val() !== '') {
        label.addClass('highlight');
      }
    }

  });

  $('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

  });
});
var addclass = document.getElementById("ac");
var removeclass = document.getElementById("rc");
var addclass2 = document.getElementById("pills-current");
var removeclass2 = document.getElementById("pills-previous");

function addRemoveClass() {
  "use strict"
  addclass.classList.add("active");
  removeclass.classList.remove("active");
}