describe('Specification for calculator', function() {
  it('should have add, subtract, mulitply, divide, square, and square root functions', function() {
    expect(add).toBeDefined();
    expect(subtract).toBeDefined();
    expect(multiply).toBeDefined();
    expect(divide).toBeDefined();
    expect(square).toBeDefined();
    expect(squareRoot).toBeDefined();
  });

  it('should add two integers', function() {
    expect(add(2, 5)).toBe(7);
  });

  it('should not return undefined when adding two numbers', function() {
    expect(add(2, 5)).not.toBe("undefined");
  });

  it('should subtract two integers', function() {
    expect(subtract(5, 2)).toBe(3);
  });

  it('should not return undefinded when subtracting two numbers', function() {
    expect(subtract(2, 5)).not.toBe("undefined");
  });

  it('should multiply two integers and obey the commutative property', function() {
    expect(multiply(2, 5)).toBe(10);
    expect(multiply(5,2)).toBe(10);
  });

  it('should return a negative number if one is negative and one is positive', function() {
    expect(multiply(-2, 12)).toBe(-24);
  });

  it('should return a positive number if both inputs are negative', function() {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('should divide two numbers', function() {
    expect(divide(6, 2)).toBe(3);
    expect(divide(-6, 2)).toBe(-3);
  });

  it('should square a number and always return a positive answer', function() {
    expect(square(6,2)).toBe(36);
    expect(square(-6, 2)).toBe(36);
  });

  it('should return the square root of a number', function() {
    expect(squareRoot(36)).toBe(6);
    expect(squareRoot(4)).toBe(2);
    expect(squareRoot(-2)).toEqual(NaN);
  });


});     