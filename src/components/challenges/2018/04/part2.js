import returnInputText from "./input"

export default function Solution04Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use. sort ascending
    const guardData = input.split(/\n/g).sort();

    // initialize some helpers
    const guards = {};
    let currentId = -1;
    let startMinute = -1;
    let endMinute = -1;
    let solveForMinute = -1;
    let solveForMinutes = -1;
    let solveForId = -1;
    
    // parse the provided data
    for (const line of guardData) {
        // if began shift, set current id and add guard to the list
        if (line.includes('begins shift')) {
            currentId = Number(line.split(' ')[3].slice(1));
            if (!guards[currentId]) {
                guards[currentId] = [];
            }
        }
        // if fell asleep, record start minute
        else if (line.includes('falls asleep')) {
            startMinute = Number(line.split(':')[1].slice(0, 2));
        }
        // if woke up, record end minute and store time spent asleep
        else if (line.includes('wakes up')) {
            endMinute = Number(line.split(':')[1].slice(0, 2));
            for (let minute = startMinute; minute < endMinute; minute++) {
                guards[currentId][minute] = (guards[currentId][minute] || 0) + 1;

                if (guards[currentId][minute] > solveForMinutes) {
                    solveForMinutes = guards[currentId][minute];
                    solveForMinute = minute;
                    solveForId = currentId;
                }
            }
        }
    }

    // spit out the answer
    let result = solveForId * solveForMinute;
    return result;
}