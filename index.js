const { solution } = require(`./solutions/solution`);

if (process.argv.length < 3) {
	console.error('Please provide a day number as an argument');
	process.exit(1);
} else if (process.argv.length > 3) {
	console.error('Please provide only one argument');
	process.exit(1);
}

let day = process.argv[2];

if (isNaN(parseInt(day))) {
	console.error('Please provide a number between 1 and 25 as an argument');
	process.exit(1);
}
if (parseInt(day) < 1 || parseInt(day) > 25) {
	console.error('Please provide a number between 1 and 25 as an argument');
	process.exit(1);
}
if (day.length === 1) {
	day = '0' + day;
}
const inputFile = `./resources/${day}input.txt`;

try {
	solution(day, inputFile);
} catch (error) {
	console.error(error);
	process.exit(1);
}
