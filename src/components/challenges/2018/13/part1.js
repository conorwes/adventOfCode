import returnTextInput from './input'

export default function Solution13Part01 () {
    const input = returnTextInput();
    const tracks = input.replace(/\^|v/g, '|').replace(/<|>/g, '-').split('\n');
    let track = input.split(/\n/g).map(l=>l.split(''));
    let states = {};

    let cartCount = 0;
    for (let y = 0; y < track.length; y++) {
        for (let x = 0; x < track[y].length; x++) {
            let ch = track[y][x];
            if (ch !== 'v' && ch !== '^' && ch !== '<' && ch !== '>') continue;
            cartCount++;
        }
    }
    
    let firstCrash = true;

    while (true) {
        let complete = [];
        let newStates = {};

        for (let y = 0; y < track.length; y++) {
            for (let x = 0; x < track[y].length; x++) {
                let ch = track[y][x];
                if (ch !== 'v' && ch !== '^' && ch !== '<' && ch !== '>') continue;
                if (complete.includes(1000 * y + x)) continue;
                
                let newX = x;
                let newY = y;

                if (newY == 150) {
                    console.log('beep')
                }
                if (ch === 'v') {
                    newY++;
                }
                else if (ch === '^') {
                    newY--;
                } 
                else if (ch === '<') {
                    newX--;
                }
                else if (ch === '>') { 
                    newX++;
                }
                else

                complete.push(newY * 1000 + newX);

                track[y][x] = tracks[y][x];

                if (track[newY][newX] === 'v' || track[newY][newX] === '^' || track[newY][newX] === '<' || track[newY][newX] === '>') {
                    if (firstCrash) {
                        console.log(newX + ',' + newY);
                        firstCrash = false;
                    }
                    // overwrite new crashing car
                    track[newY][newX] = tracks[newY][newX];
                    cartCount -= 2;
                    continue;
                }
                track[newY][newX] = ch;
                newStates[1000 * newY + newX] = (states[1000 * y + x] || 0);
                let trackShape = tracks[newY][newX];
                if (trackShape === '-' || trackShape === '|') continue;
                if (trackShape === '/') {
                    if (ch === 'v') ch = '<';
                    else if (ch === '^') ch = '>';
                    else if (ch === '<') ch = 'v';
                    else if (ch === '>') ch = '^';
                } else if (trackShape === '\\') {
                    if (ch === 'v') ch = '>';
                    else if (ch === '^') ch = '<';
                    else if (ch === '<') ch = '^';
                    else if (ch === '>') ch = 'v';
                } else if (trackShape === '+') {
                    let s = (states[1000 * y + x] || 0) % 3 + 3; // number of times to turn right
                    for (let k = 0; k < s; ++k) {
                        if (ch === 'v') ch = '<';
                        else if (ch === '^') ch = '>';
                        else if (ch === '<') ch = '^';
                        else if (ch === '>') ch = 'v';
                    }
                    newStates[1000 * newY + newX] = (states[1000 * y + x] || 0) + 1;
                }
            track[newY][newX] = ch; // new direction
            }
        }
        states = newStates;
        if (cartCount === 1) {
            for (let y = 0; y < track.length; ++y) {
                for (let x = 0; x < track[y].length; ++x) {
                    let ch = track[y][x];
                    if (ch !== 'v' && ch !== '^' && ch !== '<' && ch !== '>') continue;
                    return;
                }
           }
        }
    }    
};
