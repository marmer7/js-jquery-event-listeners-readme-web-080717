//define functions here
// input field of the form that alerts a user when they have pressed the G key.
//Define a function submitIt that does not accept a parameter. The function should bind a submit event to the form that alerts "".

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}


$(document).ready(function(){
  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
