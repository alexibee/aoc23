const fs = require('fs');

const processFile = (file) => {
	let content;
	try {
		content = fs.readFileSync(file, 'utf8');
		content = content.toString().split('\n');
		if (!content[-1]) content.pop();
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
		const array = processFile(file);
		console.log('Day #' + day);
		console.log('Part 1: ' + daySolution.part1(array));
		console.log('Part 2: ' + daySolution.part2(array));
	}
};

module.exports = { solution, processFile };
