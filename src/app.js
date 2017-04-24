var turn=[];
var counter = turn.length;
var points = counter * 100;

var roll = function () {
  return Math.floor((Math.random() * 4) + 1);
};

var reset = function () {
  turn = [];
};
