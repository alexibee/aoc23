const fs = require('fs');
const { part1, part2 } = require('../solutions/days/04.js');
const file = './resources/04test.txt';
let content;
try {
	content = fs.readFileSync(file, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const arrayOfLines = content.toString().split('\n');
if (!arrayOfLines[-1]) arrayOfLines.pop();

const expectedValid = [13, 30];

describe('Day 04: Scratchcards', () => {
	describe('Part 1', () => {
		it('should return a number', () => {
			expect(typeof part1(arrayOfLines)).toBe('number');
		});
		it('should return 0 for an empty array', () => {
			const result = part1([]);
			expect(result).toEqual(0);
		});
		it('should return valid result', () => {
			const result = part1(arrayOfLines);
			expect(result).toEqual(expectedValid[0]);
		});
	});
	describe('Part 2', () => {
		it('should return a number', () => {
			expect(typeof part2(arrayOfLines)).toBe('number');
		});
		it('should return 0 for an empty array', () => {
			const result = part2([]);
			expect(result).toEqual(0);
		});
		it('should return valid result', () => {
			const result = part2(arrayOfLines);
			expect(result).toEqual(expectedValid[1]);
		});
	});
});
