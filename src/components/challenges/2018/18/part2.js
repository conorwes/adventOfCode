import returnInputText from './input'

const types = {
    '.': 0, // Open ground
    '|': 1, // Trees
    '#': 2, // Lumberyard
};
const chars = Object.keys(types);

const visualize = map => map.map(row => row.map(type => chars[type]).join('')).join('\n');

const deltas = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
];

const neighbourCounts = (map, x, y) => {
    const counts = [0, 0, 0];
    for (const [dx, dy] of deltas) {
        if (x + dx >= 0 && x + dx < map[0].length && y + dy >= 0 && y + dy < map.length) {
            counts[map[y + dy][x + dx]] += 1;
        }
    }
    return counts;
};

export default function Solution18Part02 () {
    const input = returnInputText();
    const limit = 1e9;

    let map = input.split(/\n/g).map((line) => {
        return line.split('').map(char => types[char]);
    });
    const height = map.length;
    const width = map[0].length;

    const history = [''];

    for (let time = 1; time <= limit; time += 1) {
        const newMap = map.map(row => row.slice());
        for (let y = 0; y < height; y += 1) {
            for (let x = 0; x < width; x += 1) {
                const type = map[y][x];
                const counts = neighbourCounts(map, x, y);

                if (type === 0 && counts[1] >= 3) {
                    newMap[y][x] = 1;
                } else if (type === 1 && counts[2] >= 3) {
                    newMap[y][x] = 2;
                } else if (type === 2 && (counts[1] === 0 || counts[2] === 0)) {
                    newMap[y][x] = 0;
                }
            }
        }

        const newValue = visualize(newMap);
        const lastTime = history.findIndex(v => v === newValue);
        if (lastTime >= 0) {
            const cycle = time - lastTime;
            const mapStr = history[lastTime + (limit - lastTime) % cycle];

            const wood = mapStr.match(/\|/g).length;
            const lumberyard = mapStr.match(/#/g).length;
            return wood * lumberyard;
        }

        history.push(newValue);
        map = newMap;
    }

    return undefined;
};
