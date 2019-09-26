const Util = require('./math');
test('Test factoriel de 0 => 1', () => {
    expect(Util.factorial(0)).toBe(1);
});

test('Test factoriel de 2 => 2', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3 => 6', () => {
    expect(Util.factorial(3)).toBe(6);
});

test('Test factoriel de 3000', () => {
    expect(()=> {Util.factorial(3000)}).toThrow();
});

test('Test factoriel -10', () => {
    expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
});


describe('isPrime', function () {

    test('Test prime de 1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('Test prime de 0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('Test prime < 0 => throw exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        'isPrime %i equals to %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function () {

test('Test sumPrime < 0 => throw exception', () => {
        expect(() => { Util.sumPrime(-10) }).toThrow('Unable to compute sumPrime for n < 0');
    });
test('Test sumPrime not int throw exception', () => {
        expect(() => { Util.sumPrime("salut") }).toThrow('Unable to compute sumPrime for n not number (int)');
    });
test.each([
        [2, 2],
        [5, 10],
        [6, 10],
        [8, 17],
    ])(
        'sumPrime %i equals to %i',
        (n, expected) => {
            expect(Util.sumPrime(n)).toBe(expected);
        }
    );

});


describe('fizzBuzz', function () {

test('Test fizzBuzz < 0 => throw exception', () => {
        expect(() => { Util.fizzBuzz(-10) }).toThrow('Unable to compute fizzBuzz for n < 1');
    });
test('Test fizzBuzz not int throw exception', () => {
        expect(() => { Util.fizzBuzz("salut") }).toThrow('Unable to compute fizzBuzz for n not number (int)');
    });

test.each([
        [5, [1, 2, "Fizz", 4, "Buzz"]],
        [15, [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]],
    ])(
        'fizzBuzz %i equals to %i',
        (n, expected) => {
            expect(Util.fizzBuzz(n)).toStrictEqual(expected);
        }
    );

});

describe('cipher', function () {

test('Test cipher phrase not string (int) throw exception', () => {
        expect(() => { Util.cipher(1) }).toThrow('Unable to compute cipher for phrase not string');
    });

test('Test cipher phrase not string (empty) throw exception', () => {
        expect(() => { Util.cipher() }).toThrow('Unable to compute cipher for phrase not string');
    });

test.each([
        ["Test Unitaire", "Uftu Vojubjsf"],
        ["non","opo"],
    ])(
        'cipher "%s" equals to "%s"',
        (n, expected) => {
            expect(Util.cipher(n)).toStrictEqual(expected);
        }
    );

});

describe('pairs', function () {

test.each([
        [[3,3], 1],
        [[3,3,5,],1],
	[[3,3,5,5,5],4],
    ])(
        'pairs %d equals to %i',
        (n, expected) => {
            expect(Util.pairs(n)).toStrictEqual(expected);
        }
    );

});

