import returnInputText from "./input"

export default function Solution02Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use
    let hashes = input.split(/\n/g);

    // now we'll do a characterwise comparison
    for (let i = 0; i < hashes.length; i++) {
        for (let j = i + 1; j < hashes.length; j++) {
            const charsI = [...hashes[i]]
            const charsJ = [...hashes[j]]
    
            // use Array.reduce to determine if we have a difference
            let diff = charsI.reduce((a, c, i) => a + (c === charsJ[i] ? 0 : 1), 0)
    
            // some (dis)assembly required
            if (diff === 1) {
                let result1 = hashes[i];
                let result2 = hashes[j];
                let results = result1 + " " + result2;
                return results;
            }
        }
    }

    // something went wrong!
    return undefined;
};