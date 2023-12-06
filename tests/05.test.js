const fs = require('fs');
const { part1, part2 } = require('../solutions/days/05.js');
const file = './resources/05test.txt';
let content;
try {
	content = fs.readFileSync(file, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const string = content.toString();

const expectedValid = [35, 46];

describe('Day 05: If You Give A Seed A Fertilizer', () => {
	describe('Part 1', () => {
		it('should return a number', () => {
			expect(typeof part1(string)).toBe('number');
		});
		it('should return 0 for an empty string', () => {
			const result = part1('');
			expect(result).toEqual(0);
		});
		it('should return valid result', () => {
			const result = part1(string);
			expect(result).toEqual(expectedValid[0]);
		});
	});
	describe('Part 2', () => {
		it('should return a number', () => {
			expect(typeof part2(string)).toBe('number');
		});
		it('should return 0 for an empty string', () => {
			const result = part2('');
			expect(result).toEqual(0);
		});
		it('should return valid result', () => {
			const result = part2(string);
			expect(result).toEqual(expectedValid[1]);
		});
	});
});
