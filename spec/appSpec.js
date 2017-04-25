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

  it('should contain a function (roll) that generates a random number between 1 and four', function () {
    var a = roll();
    expect(roll).not.toBe(undefined);
    expect(a).toBeGreaterThan(0);
    expect(a).toBeLessThan(5);

    });

  it('should contain a reset button that clears the current game', function () {
    expect(reset).not.toBe(undefined);
    next();
    expect(counter).toEqual(1);
    expect(points).toEqual(100);
    reset();
  });

  it('should contain a function that modifies the turn', function () {
    expect(next).not.toBe(undefined);
    next();
    expect(turn.length).toEqual(1);
    expect(counter).toEqual(1);
    expect(points).toEqual(100);
    reset();
  });
  
  it('should contain a simple update function', function () {
    expect(update).not.toBe(undefined);
  });
});
