const fs = require('fs');

const check = { red: 12, green: 13, blue: 14 };

const sharedPart = (array) => {
	const arrayOfMaxObjs = array.map((line) => {
		if (line.trim() === '') return;
		const arraySplitFromGame = line.split(': ');
		const arrayOfSets = arraySplitFromGame[1].split('; ');
		let lineObj = {};
		arrayOfSets.forEach((set) => {
			const arrayOfCubes = set.split(', ');
			arrayOfCubes.forEach((cube) => {
				const arrayOfColourNumber = cube.split(' ');
				const colour = arrayOfColourNumber[1];
				const number = arrayOfColourNumber[0];
				if (lineObj[colour]) {
					if (parseInt(lineObj[colour]) < parseInt(number)) {
						lineObj[colour] = parseInt(number);
					}
					return lineObj;
				}
				lineObj[colour] = parseInt(number);
				return lineObj;
			});
		});
		return lineObj;
	});
	return arrayOfMaxObjs.filter(Boolean);
};

const part1 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const arrayOfMaxObjs = sharedPart(array);
	const sum = arrayOfMaxObjs.reduce((acc, item, index) => {
		if (
			check.red >= item.red &&
			check.blue >= item.blue &&
			check.green >= item.green
		) {
			acc += index + 1;
		}
		return acc;
	}, 0);
	return sum;
};

const part2 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const arrayOfMaxObjs = sharedPart(array);
	const sumOfPower = arrayOfMaxObjs.reduce((acc, item) => {
		acc += item.red * item.blue * item.green;
		return acc;
	}, 0);
	return sumOfPower;
};

module.exports = { part1, part2 };
