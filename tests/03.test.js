const fs = require('fs');
const { part1, part2 } = require('../solutions/days/03.js');
const file = './resources/03test.txt';
let content;
try {
	content = fs.readFileSync(file, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const arrayOfLines = content.toString().split('\n');

const expValid = [6666, 579928];

describe('Day 3: Gear Ratios', () => {
	describe('Part 1', () => {
		it('should return a number', () => {
			expect(typeof part1(arrayOfLines)).toBe('number');
		});
		it('should return valid result', () => {
			expect(part1(arrayOfLines)).toEqual(expValid[0]);
		});
		it('should return 0 with no lines', () => {
			expect(part1([])).toBe(0);
		});
	});
	describe('Part 2', () => {
		it('should return a number', () => {
			expect(typeof part2(arrayOfLines)).toBe('number');
		});
		it('should return valid result', () => {
			expect(part2(arrayOfLines)).toEqual(expValid[1]);
		});
		it('should return 0 with no lines', () => {
			expect(part2([])).toBe(0);
		});
	});
});
