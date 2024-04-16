// FILEPATH: /workspaces/skills-copilot-codespaces-vscode1/test.js
const Calculator = require('./Calculator'); // Assuming Calculator is exported from Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('addition', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('subtraction', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('multiplication', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('division', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('division by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
});