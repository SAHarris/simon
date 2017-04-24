describe("Game", function () {
  var turnNum = turn.length;
//these are the basic interface variables. The turn array will track the
  it('should contain a turn array', function () {
    expect(turn).not.toBe(undefined);
  });

  it('keep track of how many turns have passed', function () {
    expect(counter).toEqual(turnNum);
  });

  it('should award 100 points for eack turn completed', function () {
    expect(points).toEqual(turnNum*100);
  });

  it('should fonatin a function (roll) that generates a ramdom number between 1 and four', function () {
    var a = roll();
    expect(roll).not.toBe(undefined);
    expect(a).toBeGreaterThan(0);
    expect(a).toBeLessThan(5);
    return a;
  });

  it('should contain a reset button that clears the current game', function () {
    expect(reset).not.toBe(undefined);
  });
});
