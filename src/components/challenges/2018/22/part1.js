import returnInputText from './input';

export default function Solution22Part01() {
    let lines = returnInputText().split(/\n/g);
    let depth = +lines[0].split(': ')[1];
    let coords = lines[1].split(': ')[1].split(',');
    let targetX = +coords[0];
    let targetY = +coords[1];

    let erosion = [];

    let total = 0;

    for(let x = 0; x <= targetX; x++) {
        for(let y = 0; y <= targetY; y++) {
            let geoIndex;

            if((x === 0 && y === 0) || (x === targetX && y === targetY)) {
                geoIndex = 0;
            }
            else if(x === 0) {
                geoIndex = y * 48271;
            }
            else if(y === 0) {
                geoIndex = x * 16807;
            }
            else {
                geoIndex = erosion[x-1][y] * erosion[x][y-1];
            }

            let erosionVal = (geoIndex + depth) % 20183;

            erosion[x] = erosion[x] || [];
            erosion[x][y] = erosionVal;

            total += erosionVal % 3;
        }
    }
        
    return total;
}