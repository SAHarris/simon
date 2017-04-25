//global variables and functions
var turn = [];
var counter;
var points;
var update = function () {
  counter = turn.length;
  points = (counter * counter) * 100;
  };
var roll = function () {
    return Math.floor((Math.random() * 4) + 1);
  };
var next = function () {
    turn.push(roll());
    update();
  };
var reset = function () {
    turn = [];
  };

$(document).ready(function() {
//begin jQuery logic
var disp = function () {
  update();
  $(".round").text("Round: " + counter);
  $(".score").text("Score: "+ points);
};

$('.start').on('click', function(event){
 event.preventDefault();
 next();
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
