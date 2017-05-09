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
var blink = function (sel) {
    var beep;
    var num;
    var colr;
    if (sel == 1) {
      num = ".one";
      colr = "red";
      beep = "#one";
    }
    else if (sel == 2){
      num = ".two";
      colr = "blue";
      beep = "#two";
    }
    else if (sel == 3) {
      num = ".three";
      colr = "green";
      beep = "#three";
    }
    else {
      num = ".four";
      colr = "yellow";
      beep = "#four";
  }


    setTimeout(function(){
        $(num).css("background-color", "white");
        $(beep)[0].play();
        setTimeout(function() {
          $(num).css("background-color", colr);
        }, 1000);

    }, 500);
};
var run = function () {
    var i = 0;
    function runLoop () {
        setTimeout(function () {
            blink(turn[i]);
            i++;
            if (i < turn.length){
                runLoop();
            }
        }, 500);
    }
    runLoop();
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
