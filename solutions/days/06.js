const part1 = (string) => {
	let endResult = 0;
	if (string === '') return endResult;
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();

	const timesDistance = array.map((line) => {
		return Array.from(line.matchAll(/(\d+)/g), (m) => parseInt(m[0]));
	});
	const results = new Array(timesDistance[0].length).fill(0);
	for (let i = 0; i < timesDistance.length; i += 2) {
		for (let j = 0; j < timesDistance[i].length; j++) {
			const time = timesDistance[i][j];
			const record = timesDistance[i + 1][j];
			for (let delay = 1; delay < time; delay++) {
				if (delay * (time - delay) > record) {
					results[j] += 1;
				}
			}
		}
	}
	endResult = results.reduce((acc, item) => acc * item, 1);
	return endResult;
};

const part2 = (string) => {
	let endResult = 0;
	if (string === '') return endResult;
	const array = string.split('\n');
	if (!array[array.length - 1]) array.pop();
	let timeDistance = [];
	for (let i = 0; i < array.length; i++) {
		let empty = '';
		for (let matches of array[i].matchAll(/(\d+)/g)) {
			empty += matches[0];
		}
		timeDistance.push(parseInt(empty));
	}
	const time = timeDistance[0];
	const record = timeDistance[1];
	for (let delay = 1; delay < time; delay++) {
		if (delay * (time - delay) > record) {
			endResult += 1;
		}
	}
	return endResult;
};

module.exports = { part1, part2 };
