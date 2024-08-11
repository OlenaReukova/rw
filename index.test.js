const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  it('fizzBuzz function should correctly transform the input array', () => {
    //arrange
    const input = [1, 2, 3, 15];
    const expectedOutput = [1, 2, 'Fizz', 'FizzBuzz'];
    //act
    const actualResult = fizzBuzz(input);
    //assert
    expect(actualResult).toEqual(expectedOutput);
  });

  it('should return an empty array when input is an empty array', () => {
    //arrange
    const input = [];
    const expectedOutput = [];
    //act
    const actualResult = fizzBuzz(input);
    //assert
    expect(actualResult).toEqual(expectedOutput);
  });
  it('should handle mixed data types in array', () => {
    //arrange
    const input = [3, 'Buzz', 5, null, 15, 'Fizz'];
    const expectedOutput = ['Fizz', 'Buzz', 'Buzz', null, 'FizzBuzz', 'Fizz'];
    //act
    const actualResult = fizzBuzz(input);
    //assert
    expect(actualResult).toEqual(expectedOutput);
  });
  it('returns "FizzBuzz" for multiples of 15', () => {
    //arrange
    const input = [2, 4, 15];
    const expectedOutput = [2, 4, 'FizzBuzz'];
    //act
    const actualResult = fizzBuzz(input);
    //assert
    expect(actualResult).toEqual(expectedOutput);
  });
});

//TDD
//1. Write the first failing test

//fizzBuzz function should correctly transform the input array
//should return an empty array when input is an empty array
//should handle mixed data types in array-in this case we should refactor the code adding
// if (typeof num !== 'number') {
//       return num;
//     }

//2. Write code to make the test pass

//3. Refactor the code

//returns "FizzBuzz" for multiples of 15
//returns "Fizz" for multiples of 3
//returns "Buzz" for multiples of 5
//returns the number itself if not a multiple of 3 or 5
