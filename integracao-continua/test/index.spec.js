const { sum, multiply } = require("../lib/index");

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiply 1 * 2 to equal 2', () => {
    expect(multiply(1.5, 2)).toBe(3);
});
