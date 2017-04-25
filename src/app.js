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
