const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should output "fizz" if divisible by 3, "buzz" if by 5, and "fizz-buzz" if by both', function() {

    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: -3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: -5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: -15, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {

    const badInputs = [
      ['a', 1],
      [1, false]
    ];

    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});