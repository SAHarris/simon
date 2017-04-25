//global variables and functions
var turn=[];
var update = function () {
  counter = turn.length;
  points = counter * 100;
};
var counter;
var points;
update();
var roll = function () {
  return Math.floor((Math.random() * 4) + 1);
};
var next = function () {
  turn.push(roll());
  update();
};
var reset = function () {
  turn = [];
  update();
};

//begin jQuery logic
$(document).ready(function() {
  update();
  $(".round").text("Round: " + counter);
  $(".score").text("Score: "+ points);
});
