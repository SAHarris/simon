//global variables and functions
var turn = [];
var roll = function () {
    return Math.floor((Math.random() * 4) + 1);
  };
var next = function () {
    turn.push(roll());
  };
var reset = function () {
    turn = [];
  };

$(document).ready(function() {
//begin jQuery logic
var disp = function () {
  var a = turn.length;
  $(".round").text("Round: " + a);
  $(".score").text("Score: "+ (a * a) * 100);
};
var run = function () {
  next();
  disp();
  for (var i = 0; i < turn.length; i++) {
    var num;
    if (turn[i] == 1) {
      num = ".one";
    }
    else if (turn[i] == 2){
      num = ".two";
    }
    else if (turn[i] == 3) {
      num = ".three";
    }
    else {
      num = ".four";
    }
    $(num).fadeOut(1500);
    $(num).fadeIn(1500);

  }
};

$('.start').on('click', function(event){
 event.preventDefault();
 next();
 run();
 disp();
 });

$('.reset').on('click', function(event){
 event.preventDefault();
 reset();
 disp();
 });

// begin run code
disp();
//end jQuery doc.ready func
});
