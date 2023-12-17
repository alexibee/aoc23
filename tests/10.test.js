const fs = require('fs');
const { part1, part2 } = require('../solutions/days/10.js');
const file = './resources/10test.txt';
const file2 = './resources/10-2test.txt';
let content;
let content2;

try {
	content = fs.readFileSync(file, 'utf8');
	content2 = fs.readFileSync(file2, 'utf8');
} catch (error) {
	console.error(error);
	process.exit(1);
}
const string = content.toString();
const string2 = content2.toString();
const expectedValid = [8, 10];

describe('Day 10: Pipe Maze', () => {
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
			expect(typeof part2(string2)).toBe('number');
		});
		it('should return 0 for an empty string', () => {
			expect(part2('')).toEqual(0);
		});
		it('should return valid result', () => {
			expect(part2(string2)).toEqual(expectedValid[1]);
		});
	});
});
