const fs = require('fs');
const { part1, part2 } = require('../solutions/days/01.js');
const file = './resources/01test.txt';
let content;
try {
	content = fs.readFileSync(file, 'utf8');
	content = content.toString().split('\n');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const arrayOfLines = content;

const expValid = [318, 309];

describe('Day 1: Trebuchet?!', () => {
	describe('Part 1', () => {
		it('should return valid result', () => {
			expect(part1(arrayOfLines)).toEqual(expValid[0]);
		});
		it('should return 0 with no lines', () => {
			expect(part1([])).toBe(0);
		});
	});
	describe('Part 2', () => {
		it('should return valid result', () => {
			expect(part2(arrayOfLines)).toEqual(expValid[1]);
		});
		it('should return 0 with no lines', () => {
			expect(part1([])).toBe(0);
		});
	});
});
