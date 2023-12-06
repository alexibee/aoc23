const fs = require('fs');

const processFile = (file) => {
	let content;
	try {
		content = fs.readFileSync(file, 'utf8');
		content = content.toString();
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
	return content;
};

const solution = (day, file) => {
	let daySolution;
	try {
		daySolution = require(`./days/${day}.js`);
	} catch (error) {
		console.log("Solution doesn't exist yet!");
		process.exit(2);
	}

	if (daySolution) {
		const string = processFile(file);
		console.log('Day #' + day);
		console.log('Part 1: ' + daySolution.part1(string));
		console.log('Part 2: ' + daySolution.part2(string));
	}
};

module.exports = { solution, processFile };
