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
    }
    else if ($this.val() !== '') {
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
var addclass = document.getElementById("ac");
var removeclass = document.getElementById("rc");
var addclass2 = document.getElementById("pills-current");
var removeclass2 = document.getElementById("pills-previous");
function addRemoveClass() {
  "use strict"
  // active show
  addclass.classList.add("active");
  removeclass.classList.remove("active");
  //   addclass2.classList.add("active show");
  // removeclass2.classList.remove("active show");
}


    // active show
//   addclass2.classList.add("active show");
// removeclass2.classList.remove("active show");
// var addRemoveClass = document.getElementById("addRemoveClass");
// addRemoveClass.onclick = function(){
// //   var addclass = document.getElementById("ac");
// //   var removeclass = document.getElementById("rc");
// //   addclass.classList.add("active");
// //   removeclass.classList.remove("active");

// }

// $("#arc").click(function(){
//     $("#ac").addClass("active");
//     $("#rc").removeClass("active");
//   });
  