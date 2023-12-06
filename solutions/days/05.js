const returnMappingNumsFromString = (string) => {
	const array = string.split('\n').slice(1);
	if (!array[array.length - 1]) array.pop();
	let matches = [];
	for (const subArray of array) {
		const arrayOfStrings = subArray.split(' ');
		matches.push(arrayOfStrings.map((string) => parseInt(string)));
	}
	return matches;
};

const checkMatch = (number, array) => {
	let mappedVal = number;
	for (const [dest, src, count] of array) {
		if (number >= src && number < src + count) {
			mappedVal = dest + (number - src);
		}
	}
	return mappedVal;
};

const checkRangeMatch = (ranges, maps) => {
	const locations = [];
	for (const range of ranges) {
		let remaining = [range];
		let result = [];

		for (const numMap of maps) {
			while (remaining.length > 0) {
				const current = remaining.pop();

				for (const [dest, src, count] of numMap) {
					if (current[1] < src || src + count <= current[0]) {
						continue;
					} else if (src <= current[0] && current[1] < src + count) {
						const offset = current[0] - src;
						result.push([
							dest + offset,
							dest + offset + current[1] - current[0],
						]);
						break;
					} else if (current[0] < src && src + count <= current[1]) {
						const offset = current[1] - src;
						result.push([dest, dest + offset]);
						remaining.push([current[0], src - 1]);
						break;
					} else if (
						src <= current[0] &&
						current[0] < src + count &&
						src + count <= current[1]
					) {
						const offset = current[0] - src;
						result.push([dest + offset, dest + count - 1]);
						remaining.push([src + count, current[1]]);
						break;
					} else if (
						current[0] < src &&
						src <= current[1] &&
						src + count <= current[1]
					) {
						result.push([dest, dest + count - 1]);
						remaining.push([current[0], src - 1]);
						remaining.push([src + count, current[1]]);
						break;
					}
				}

				if (!result.length) {
					result.push(current);
				}
			}
			remaining = result;
			result = [];
		}
		locations.push(...remaining);
	}
	return locations;
};

const part1 = (string) => {
	if (!string) return 0;
	const array = string.split('\n\n');
	let seeds = array[0].split(': ')[1].split(' ');
	seeds = seeds.map((seed) => parseInt(seed));
	const maps = [];
	for (let i = 1; i < array.length; i++) {
		maps.push(returnMappingNumsFromString(array[i]));
	}
	const locations = seeds.map((seed) => {
		let match = seed;
		for (const map of maps) {
			match = checkMatch(match, map);
		}
		return match;
	});

	return Math.min(...locations);
};

const part2 = (string) => {
	if (!string) return 0;
	const array = string.split('\n\n');
	let seeds = array[0].split(': ')[1].split(' ');
	seeds = seeds.map((seed) => parseInt(seed));

	let ranges = [];
	for (let i = 0; i < seeds.length; i += 2) {
		const start = seeds[i];
		const end = seeds[i + 1] + start - 1;
		ranges.push([start, end]);
	}
	const maps = [];
	for (let i = 1; i < array.length; i++) {
		maps.push(returnMappingNumsFromString(array[i]));
	}
	const locations = checkRangeMatch(ranges, maps);

	return Math.min(...locations.map((i) => i[0]));
};

module.exports = { part1, part2 };
