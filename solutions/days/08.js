const checkDivisor = (array, number, resultArray) => {
	let dividerStatus = array.every((total) => !total % number);
	let dividedArray = array;
	if (dividerStatus) {
		dividedArray = array.map((total) => total / check);
		resultArray.push(number);
		return checkDivisor(dividedArray, number, resultArray);
	}
	return [dividedArray, resultArray];
};

const part1 = (string) => {
	if (!string) return 0;
	let [instructions, navigation] = string.split(/\n\s*\n/);
	instructions = instructions.split('');
	const navigationMap = {};
	navigation.split('\n').forEach((line, index) => {
		if (line) {
			let [action, directions] = line.split(' = ');
			directions = directions.replace(/[(,)]/g, '').split(' ');
			navigationMap[action] = directions;
		}
	});
	let currentKey = 'AAA';
	let steps = 0;
	let counter = 0;
	while (currentKey !== 'ZZZ') {
		if (counter === instructions.length) counter = 0;
		let directionDigit = instructions[counter] === 'R' ? 1 : 0;
		currentKey = navigationMap[currentKey][directionDigit];
		counter++;
		steps++;
	}
	return steps;
};

const part2 = (string) => {
	if (!string) return 0;
	let [instructions, navigation] = string.split(/\n\s*\n/);
	instructions = instructions.split('');
	const navigationMap = {};
	let actions = [];
	navigation.split('\n').forEach((line, index) => {
		if (line) {
			let [action, directions] = line.split(' = ');
			directions = directions.replace(/[(,)]/g, '').split(' ');
			navigationMap[action] = directions;
			actions.push(action);
		}
	});

	let initialActions = actions.filter((action) => action[2] === 'A');

	let stepsTotal = initialActions.map((action) => {
		let currentKey = action;
		let steps = 0;
		let counter = 0;

		while (currentKey[2] !== 'Z') {
			if (counter === instructions.length) counter = 0;
			let directionDigit = instructions[counter] === 'R' ? 1 : 0;
			currentKey = navigationMap[currentKey][directionDigit];
			counter++;
			steps++;
		}
		return steps;
	});
	let validDivisors = [];

	const calculateLCM = (...arr) => {
		const calculateGCD = (num1, num2) =>
			!num2 ? num1 : calculateGCD(num2, num1 % num2);
		const _calculateLCM = (num1, num2) => {
			console.log(num1, num2);
			return (num1 * num2) / calculateGCD(num1, num2);
		};
		return [...arr].reduce((a, b) => _calculateLCM(a, b));
	};

	return calculateLCM(...stepsTotal);
};

module.exports = {
	part1,
	part2,
};
