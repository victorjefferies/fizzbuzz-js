describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  }); 

  it("should return 'fizz' when passed 3", function() {
    expect(fizzbuzz.play(3)).toEqual("fizz");
  });

  it("should return 'buzz' when passed 5", function() {
    expect(fizzbuzz.play(5)).toEqual('buzz');
  });

  it("should return 4 when passed 4", function() {
    expect(fizzbuzz.play(4)).toEqual(4);
  });

  it("should return 'fizzbuzz' when passed 15", function() {
    expect(fizzbuzz.play(15)).toEqual('fizzbuzz')
  });

});