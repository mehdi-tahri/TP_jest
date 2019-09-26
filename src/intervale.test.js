const Interval = require('./interval');

describe('overlaps', function () {
    let intervalGenerale = new Interval(5,6);

    test('Test intervale overlaps true', () => {
	let interval2 = new Interval(5,6);
        expect(intervalGenerale.overlaps(interval2)).toBe(true)
    });
    test('Test intervale overlaps false', () => {
	let interval2 = new Interval(1,3);
        expect(intervalGenerale.overlaps(interval2)).toBe(false)
    });
});

describe('includes', function () {
    let intervalGenerale = new Interval(4,8);

    test('Test intervale total includes  true', () => {
	let interval2 = new Interval(4,8);
        expect(intervalGenerale.includes(interval2)).toBe(true)
    });

    test('Test intervale  includes  true', () => {
	let interval2 = new Interval(5,6);
        expect(intervalGenerale.includes(interval2)).toBe(true)
    });
    test('Test intervale total exclude (false)', () => {
	let interval2 = new Interval(1,3);
        expect(intervalGenerale.includes(interval2)).toBe(false)
    });
    test('Test intervale includes (false)', () => {
	let interval2 = new Interval(1,5);
        expect(intervalGenerale.includes(interval2)).toBe(false)
    });
});
