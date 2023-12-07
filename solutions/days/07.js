const cardArray1 = [
	'A',
	'K',
	'Q',
	'J',
	'T',
	'9',
	'8',
	'7',
	'6',
	'5',
	'4',
	'3',
	'2',
];
const cardArray2 = [
	'A',
	'K',
	'Q',
	'T',
	'9',
	'8',
	'7',
	'6',
	'5',
	'4',
	'3',
	'2',
	'J',
];

const produceCards = (cardArray) => {
	const map = {};
	let j = 0;
	for (let i = cardArray.length - 1; i >= 0; i--) {
		map[cardArray[i]] = j;
		j++;
	}
	return map;
};
const types = {
	5: 6,
	41: 5,
	31: 3,
	21: 1,
	11: 0,
	32: 4,
	22: 2,
};

const establishType = (values) => {
	let type;
	if (values.length === 1) {
		type = 5;
	} else {
		values.sort((a, b) => b - a);
		type = values[0].toString() + values[1].toString();
	}
	return type;
};

const handComparator = (cardMap) => {
	return (a, b) => {
		if (a.type === b.type) {
			for (let i = 0; i < a.cards.length; i++) {
				if (cardMap[a.cards[i]] > cardMap[b.cards[i]]) {
					return 1;
				} else if (cardMap[a.cards[i]] < cardMap[b.cards[i]]) {
					return -1;
				}
			}
		}
		return types[a.type] - types[b.type];
	};
};

const countCards = (cards) => {
	let cardCounter = {};
	for (let i = 0; i < cards.length; i++) {
		cardCounter[cards[i]] = cardCounter[cards[i]]
			? cardCounter[cards[i]] + 1
			: 1;
	}
	return cardCounter;
};

const enforceJokerRule = (cardCounter, cardMap) => {
	let enforcedCounter = { ...cardCounter };
	const cards = Object.keys(enforcedCounter);
	if (cards.length > 1 && cards.includes('J')) {
		let sortedByCount = {};
		for (let key in enforcedCounter) {
			if (key === 'J') continue;
			let cardCountForCurrent = enforcedCounter[key];
			if (!sortedByCount[cardCountForCurrent]) {
				sortedByCount[cardCountForCurrent] = key;
			} else if (cardMap[key] > cardMap[sortedByCount[cardCountForCurrent]]) {
				sortedByCount[cardCountForCurrent] = key;
			}
		}
		let occurences = Object.keys(sortedByCount);
		const maxOccurence = Math.max(...occurences);
		const maxCard = sortedByCount[maxOccurence];
		enforcedCounter[maxCard] = enforcedCounter[maxCard] + enforcedCounter['J'];

		delete enforcedCounter['J'];
	}
	return enforcedCounter;
};

const cardMap = produceCards(cardArray1);
const cardMap2 = produceCards(cardArray2);

const part1 = (string) => {
	const cardsWithBids = string.split('\n');
	if (cardsWithBids[cardsWithBids.length - 1] === '') cardsWithBids.pop();
	const hands = cardsWithBids.map((line) => {
		const [cards, bid] = line.split(' ');
		const cardCounter = countCards(cards);
		let values = Object.values(cardCounter);
		const type = establishType(values);
		return { cards, bid: parseInt(bid), type };
	});
	hands.sort(handComparator(cardMap));
	const result = hands.reduce((acc, item, index) => {
		acc += item.bid * (index + 1);
		return acc;
	}, 0);
	return result;
};

const part2 = (string) => {
	const cardsWithBids = string.split('\n');
	if (cardsWithBids[cardsWithBids.length - 1] === '') cardsWithBids.pop();
	const hands = cardsWithBids.map((line) => {
		const [cards, bid] = line.split(' ');
		let cardCounter = countCards(cards);
		let jokerizedCardCounter = enforceJokerRule(cardCounter, cardMap2);
		let values = Object.values(jokerizedCardCounter);
		const type = establishType(values);

		return { cards, bid: parseInt(bid), type };
	});
	hands.sort(handComparator(cardMap2));
	const result = hands.reduce((acc, item, index) => {
		acc += item.bid * (index + 1);
		return acc;
	}, 0);
	return result;
};

module.exports = { part1, part2 };
