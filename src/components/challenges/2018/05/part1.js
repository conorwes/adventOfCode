import returnInputText from "./input"

export default function Challenge05Part01() {
    // feed in input from AoC
    let polymer = returnInputText();

    // initialize helper variable
    let lastLength = polymer.length;

    // iterate through polymer and check for consecutive upper/lower case
    while (true) {
        for (let i = 0; i < polymer.length - 1; i += 1) {
            // unicode uppercase & lowercase differ by 32, so we can just do an abs difference to find sequential case switches
            if (Math.abs(polymer.charCodeAt(i) - polymer.charCodeAt(i + 1)) === 32) {
                polymer = polymer.substring(0, i) + polymer.substring(i + 2);
            }
        }

        // can't be improved any more
        if (polymer.length === lastLength) {
            return polymer.length;
        }

        // restart with new length
        lastLength = polymer.length;
    }
}