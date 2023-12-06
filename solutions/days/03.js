const processArray = (array) => {
	let numbers = [];
	let symbols = [];
	for (const [lineNum, line] of array.entries()) {
		const matchedNumbers = line.matchAll(/\d+/g);
		for (const number of matchedNumbers) {
			numbers.push({
				value: parseInt(number[0]),
				x: number.index,
				y: lineNum,
				length: number[0].length,
			});
		}
		const symbolMatches = line.matchAll(/[^0-9.]/g);
		for (const symbol of symbolMatches) {
			symbols.push({
				token: symbol[0],
				x: symbol.index,
				y: lineNum,
			});
		}
	}
	return { numbers, symbols };
};

const isNextTo = (num, symbol) => {
	const left = num.x - 1;
	const right = num.x + num.length;
	const top = num.y - 1;
	const bottom = num.y + 1;
	return (
		symbol.x >= left &&
		symbol.x <= right &&
		symbol.y >= top &&
		symbol.y <= bottom
	);
};

const part1 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const { numbers, symbols } = processArray(array);
	const adjacentNums = numbers.filter((num) =>
		symbols.some((symbol) => isNextTo(num, symbol))
	);
	const sum = adjacentNums.reduce((acc, num) => acc + num.value, 0);
	return sum;
};
const part2 = (string) => {
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	const { numbers, symbols } = processArray(array);
	const gears = symbols.filter((symbol) => symbol.token === '*');
	const adjacentProduct = gears.map((gear) => {
		const adjacentNums = numbers.filter((num) => isNextTo(num, gear));
		if (adjacentNums.length === 2) {
			return adjacentNums[0].value * adjacentNums[1].value;
		}
		return 0;
	});
	const resultSum = adjacentProduct.reduce((acc, b) => acc + b, 0);
	return resultSum;
};

module.exports = { part1, part2 };
