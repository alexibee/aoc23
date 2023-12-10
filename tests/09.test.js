const fs = require('fs');
const { part1, part2 } = require('../solutions/days/09.js');
const file = './resources/09test.txt';
let content;

try {
	content = fs.readFileSync(file, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const string = content.toString();
const expectedValid = [114, 2];

describe('Day 9: Mirage Maintenance', () => {
	describe('Part 1', () => {
		it('should return a number', () => {
			expect(typeof part1(string)).toBe('number');
		});
		it('should return 0 for an empty string', () => {
			expect(part1('')).toEqual(0);
		});
		it('should return valid result', () => {
			expect(part1(string)).toEqual(expectedValid[0]);
		});
	});
	describe('Part 2', () => {
		it('should return a number', () => {
			expect(typeof part2(string)).toBe('number');
		});
		it('should return 0 for an empty string', () => {
			expect(part2('')).toEqual(0);
		});
		it('should return valid result', () => {
			expect(part2(string)).toEqual(expectedValid[1]);
		});
	});
});
