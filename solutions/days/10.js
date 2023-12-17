const directionOptions = {
	left: { L: 'up', F: 'down', '-': 'left' },
	right: { 7: 'down', J: 'up', '-': 'right' },
	down: { L: 'right', J: 'left', '|': 'down' },
	up: { F: 'right', 7: 'left', '|': 'up' },
};

const directions = ['left', 'right', 'up', 'down'];

const getNextCoords = (current, direction) => {
	switch (direction) {
		case 'left':
			return { x: current.x - 1, y: current.y };
			break;
		case 'right':
			return { x: current.x + 1, y: current.y };
			break;
		case 'up':
			return { x: current.x, y: current.y - 1 };
			break;
		case 'down':
			return { x: current.x, y: current.y + 1 };
			break;
		default:
			return null;
	}
};

const getStart = (startLocation, array) => {
	let current = {};
	let token = '';
	let direction = '';
	for (let i = 0; i < directions.length; i++) {
		current = getNextCoords(startLocation, directions[i]);
		token = array[current.y][current.x] || '';
		if (current && token && directionOptions[directions[i]][token]) {
			direction = directions[i];
			break;
		}
	}
	return [current, token, direction];
};

const part1 = (string) => {
	if (string === '') return 0;
	let array = string.split('\n');
	if (array[array.length - 1] === '') array.pop();

	array = array.map((line) => line.split(''));
	let locationOfStart = {};
	array.forEach((line, index) => {
		let indexOfStart = line.indexOf('S');
		if (indexOfStart !== -1) {
			locationOfStart['x'] = indexOfStart;
			locationOfStart['y'] = index;
			return;
		}
	});
	let option = {};
	let currentDirection = '';
	let symbol = '';
	let count = 1;

	[option, symbol, currentDirection] = getStart(locationOfStart, array);

	while (symbol !== 'S') {
		symbol = array[option.y][option.x] || '';
		if (option && symbol && directionOptions[currentDirection][symbol]) {
			currentDirection = directionOptions[currentDirection][symbol];
			option = getNextCoords(option, currentDirection);
			count++;
		}
	}
	return count / 2;
};

const calcAreaShoelaceForm = (vertices) => {
	// using shoelace formula to calculate area of polygon given vertices
	let area = 0;

	for (let i = 0; i < vertices.length; i++) {
		const nextIndex = (i + 1) % vertices.length;
		const currentX = vertices[i].x;
		const currentY = vertices[i].y;
		const nextY = vertices[nextIndex].y;
		const nextX = vertices[nextIndex].x;
		area += currentX * nextY - currentY * nextX;
	}

	area = Math.abs(area) / 2;

	return area;
};

const part2 = (string) => {
	if (string === '') return 0;
	let array = string.split('\n');
	if (array[array.length - 1] === '') array.pop();

	array = array.map((line) => line.split(''));
	let locationOfStart = {};
	array.forEach((line, index) => {
		let indexOfStart = line.indexOf('S');
		if (indexOfStart !== -1) {
			locationOfStart['x'] = indexOfStart;
			locationOfStart['y'] = index;
			return;
		}
	});
	let option = {};
	let currentDirection = '';
	let symbol = '';
	let boundaryPointsCount = 1;
	const verticeSymbols = ['F', '7', 'L', 'J'];
	const vertices = [locationOfStart];

	[option, symbol, currentDirection] = getStart(locationOfStart, array);

	while (symbol !== 'S') {
		symbol = array[option.y][option.x] || '';
		if (option && symbol && directionOptions[currentDirection][symbol]) {
			currentDirection = directionOptions[currentDirection][symbol];
			if (verticeSymbols.includes(symbol)) {
				vertices.push(option);
			}
			option = getNextCoords(option, currentDirection);
			boundaryPointsCount++;
		}
	}

	const area = calcAreaShoelaceForm(vertices);
	return area - boundaryPointsCount / 2 + 1;
};
module.exports = { part1, part2 };
