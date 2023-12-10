const difference = (arr) => {
	let nextSequence = [];
	for (let i = 0; i < arr.length - 1; i++) {
		nextSequence.push(arr[i + 1] - arr[i]);
	}
	return nextSequence;
};

const part1 = (string) => {
	let lines = string.split('\n');
	if (lines[lines.length - 1] === '') lines.pop();
	lines = lines.map((line) => line.split(' '));
	let sum = 0;
	lines.forEach((line) => {
		let nextSeq = line.map((num) => parseInt(num));
		let sequences = [nextSeq];
		while (!nextSeq.every((num) => num === 0)) {
			nextSeq = difference(nextSeq);
			sequences.push(nextSeq);
		}
		sum += sequences.reduce((acc, curr) => acc + curr[curr.length - 1], 0);
	});
	return sum;
};
const part2 = (string) => {
	let lines = string.split('\n');
	if (lines[lines.length - 1] === '') lines.pop();
	lines = lines.map((line) => line.split(' '));
	let sum = 0;
	lines.forEach((line) => {
		let nextSeq = line.map((num) => parseInt(num));
		let sequences = [nextSeq];
		while (!nextSeq.every((num) => num === 0)) {
			nextSeq = difference(nextSeq);
			sequences.push(nextSeq);
		}
		let sequencesRev = sequences.reverse();
		sum += sequencesRev.reduce((acc, curr) => curr[0] - acc, 0);
	});
	return sum;
};

module.exports = { part1, part2 };
