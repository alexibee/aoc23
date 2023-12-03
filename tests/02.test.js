const fs = require('fs');
const { part1, part2 } = require('../solutions/days/02.js');
const file = './resources/02test.txt';
let content;
try {
	content = fs.readFileSync(file, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const arrayOfLines = content.toString().split('\n');

const expValid = [23, 4928];

describe('Day 2: Cube Conundrum', () => {
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
