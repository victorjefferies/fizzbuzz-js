describe("FizzBuzz", function() {
  it("should return 'fizz' when passed 3", function() {
    expect(FizzBuzz(3)).toEqual("fizz");
  });

  it("should return 'buzz' when passed 5", function() {
    expect(FizzBuzz(5)).toEqual('buzz');
  });

  it("should return 4 when passed 4", function() {
    expect(FizzBuzz(4)).toEqual(4);
  });

  it("should return 'fizzbuzz' when passed 15", function() {
    expect(FizzBuzz(15)).toEqual('fizzbuzz')
  });

});