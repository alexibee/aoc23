const numObj = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

const part1 = (array) => {
	let firstNumber = 0;
	let secondNumber = 0;
	let result = 0;
	array.forEach((line) => {
		line = line.replace(/[^1-9]/g, '');
		if (line.trim() === '') return;
		line = line.toString().split('');
		firstNumber = parseInt(line[0]);
		secondNumber = parseInt(line[line.length - 1]);
		result += firstNumber * 10 + secondNumber;
		return result;
	});
	return result;
};

const checkWord = (word) => {
	let result = null;
	Object.keys(numObj).forEach((key) => {
		if (word.includes(key)) {
			result = numObj[key];
			return result;
		}
	});
	return result;
};

const part2 = (array) => {
	let result = 0;
	array.forEach((line) => {
		if (line.trim() === '') return;
		let firstNumber = 0;
		let firstNumWord = [];
		let secondNumber = 0;
		let secondNumWord = [];
		let foundOne = false;
		let foundTwo = false;
		let i = 0;
		let j = line.length - 1;
		while (i < line.length && j >= 0 && (!foundOne || !foundTwo)) {
			if (!foundOne) {
				firstNumWord.push(line[i]);
				if (!isNaN(parseInt(line[i]))) {
					firstNumber = parseInt(line[i]);
					foundOne = true;
				}
				if (checkWord(firstNumWord.join(''))) {
					firstNumber = checkWord(firstNumWord.join(''));
					foundOne = true;
				}
				i++;
			}
			if (!foundTwo) {
				secondNumWord.unshift(line[j]);
				if (!isNaN(parseInt(line[j]))) {
					secondNumber = parseInt(line[j]);
					foundTwo = true;
				}
				if (checkWord(secondNumWord.join(''))) {
					secondNumber = checkWord(secondNumWord.join(''));
					foundTwo = true;
				}
				j--;
			}
		}
		result += firstNumber * 10 + secondNumber;
		return result;
	});
	return result;
};

module.exports = {
	part1,
	part2,
};
