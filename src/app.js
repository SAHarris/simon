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
var blink = function (num, colr) {
    $(num).css("background-color", "white");
//add audio
    setTimeout(function(){
        $(num).css("background-color", colr)
    }, 1000);
};
var run = function () {

  for (var i = 0; i < turn.length; i++) {
    var num;
    var colr;
    if (turn[i] == 1) {
      num = ".one";
      colr = "red";
    }
    else if (turn[i] == 2){
      num = ".two";
      colr = "blue";
    }
    else if (turn[i] == 3) {
      num = ".three";
      colr = "green";
    }
    else {
      num = ".four";
      colr = "yellow";
    }

    setTimeout(function () {
        blink(num, colr)}, 500);



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
