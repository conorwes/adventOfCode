import returnInputText from "./input"

export default function Solution04Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use. sort ascending
    const guardData = input.split(/\n/g).sort();

    // initialize some helpers
    const guards = {};
    const minutesSleeping = {};
    let currentId = -1;
    let startMinute = -1;
    let endMinute = -1;
    let mostMinutesSleeping = -1;
    let mostMinutesSleepingId = -1;
    
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
            }

            minutesSleeping[currentId] = (minutesSleeping[currentId] || 0) + endMinute - startMinute;

            // if time spent asleep is larger than current max, increase max
            if (minutesSleeping[currentId] > mostMinutesSleeping){
                mostMinutesSleeping = minutesSleeping[currentId];
                mostMinutesSleepingId = currentId;
            }
        }
    }

    let mostAsleepTotal = -1;
    guards[mostMinutesSleepingId].reduce((acc, count, minute) => {
        if (count > acc) {
            mostAsleepTotal = minute;
            return count;
        }
        return acc;
    }, 0);

    // spit out the answer
    let result = mostMinutesSleepingId * mostAsleepTotal;
    return result;
}