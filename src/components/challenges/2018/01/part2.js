import returnInputText from "./input"

export default function Solution01Part02() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use, and translate them into numbers
    const deltas = input.split(/\n/g).map(Number);

    // initialize helpers
    const seen = new Set();
    let frequency = 0;
    let result = 0;
    
    // iterate through deltas and update frequency
    while (true) {
        for (const delta of deltas) {
            seen.add(frequency);
            frequency += delta;

            // if seen has frequency, we'll end here.
            if (seen.has(frequency)) {
                result = frequency;
                return result;
            }
        }
    }
};