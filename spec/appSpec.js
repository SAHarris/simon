describe("Game", function () {
//these are the basic interface variables. The turn array will track the
  it('should contain a turn array', function () {
    expect(turn).not.toBe(undefined);
  });

  it('keep track of how many turns have passed', function () {
    update();
    expect(counter).toEqual(turn.length);
  });

  it('should award 100 points for eack turn completed', function () {
    update();
    expect(points).toEqual(turn.length*100);
    });
//roll test throws error after adding jQuery to update()
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
