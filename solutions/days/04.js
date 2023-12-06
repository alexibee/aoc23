const parseArray = (array) => {
	const arrayOfCards = array.map((line) => {
		const lineWithoutGame = line.split(': ')[1];
		const [winning, results] = lineWithoutGame.split(' | ');
		const winningArray = winning.match(/\d+/g);
		const resultsArray = results.match(/\d+/g);
		return [winningArray, resultsArray];
	});
	return arrayOfCards;
};

const part1 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const arrayOfCards = parseArray(array);
	const arrayOfCounts = arrayOfCards.map((array) => {
		const [winningArray, resultsArray] = array;
		let counter = 0;
		for (const number of resultsArray) {
			if (winningArray.includes(number)) {
				counter += 1;
			}
		}
		return counter ? 2 ** (counter - 1) : 0;
	});

	const sum = arrayOfCounts.reduce((acc, count) => acc + count, 0);
	return sum;
};
const part2 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const arrayOfCards = parseArray(array);
	const arrayOfCounts = arrayOfCards.map((array) => {
		const [winningArray, resultsArray] = array;
		let counter = 0;
		for (const number of resultsArray) {
			if (winningArray.includes(number)) {
				counter += 1;
			}
		}
		return { counter: counter, copies: 1 };
	});
	const base = arrayOfCards.length;
	for (let i = 0; i < base; i++) {
		const currentCountObj = arrayOfCounts[i];
		const { counter, copies } = currentCountObj;
		for (let k = 0; k < copies; k++) {
			for (let j = i + 1; j <= i + counter; j++) {
				arrayOfCounts[j].copies += 1;
			}
		}
	}
	return arrayOfCounts.reduce((acc, count) => acc + count.copies, 0);
};

module.exports = { part1, part2 };
