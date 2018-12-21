import returnInputText from "./input"

function manhattan([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export default function Solution06Part02(distanceLimit) {
    // feed in input from AoC
    const input = returnInputText();
    const coordinates = input.split(/\n/g).map(line => line.split(', ').map(Number));

    let regionSize = 0;

    for (let x = 0; x < 400; x += 1) {
        for (let y = 0; y < 400; y += 1) {
            const sum = coordinates.reduce((acc, [cx, cy]) => acc + manhattan([x, y], [cx, cy]), 0);
            if (sum < distanceLimit) {
                regionSize += 1;
            }
        }
    }

    return regionSize;
};
