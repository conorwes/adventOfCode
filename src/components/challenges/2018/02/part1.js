import returnInputText from "./input"

export default function Solution02Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use
    const hashes = input.split(/\n/g);

    // we'll use these later, so retrieve them now.
    const hashCount = hashes.length;
    const hashLength = hashes[0].length;

    // initialize some helpers
    let twos = 0;
    let threes = 0;
    let lastChars = hashes[0];
    let result = 0;

    // we'll populate an array containing the alphabet, and update the counts of each character accordingly while processing the first hash
    const counts = Array.from(new Array(26), () => 0);
    for (let c = 0; c < lastChars.length; c += 1) {
        // a == 97, so we'll subtract to get 0-25
        counts[lastChars.charCodeAt(c) - 97] += 1;
    }

    // update twos and threes accordingly
    if (counts.includes(2)) {
        twos += 1;
    }
    if (counts.includes(3)) {
        threes += 1;
    }

    // now we'll go through the remaining hashes and compare against the previous
    for (let h = 1; h < hashCount; h += 1) {
        const chars = hashes[h];
        for (let c = 0; c < hashLength; c += 1) {
            if (chars[c] !== lastChars[c]) {
                counts[lastChars.charCodeAt(c) - 97] -= 1;
                counts[chars.charCodeAt(c) - 97] += 1;
            }
        }

        if (counts.includes(2)) {
            twos += 1;
        }
        if (counts.includes(3)) {
            threes += 1;
        }
        lastChars = chars;
    }

    // return the final result
    result = twos * threes;
    return result;
};