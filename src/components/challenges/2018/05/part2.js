import returnInputText from "./input";

// tailored implementation from part 1
function doReactions(polymer){
    let lastLength = polymer.length;
    while (true) {
        for (let i = 0; i < polymer.length - 1; i += 1) {
            if (Math.abs(polymer.charCodeAt(i) - polymer.charCodeAt(i + 1)) === 32) {
                polymer = polymer.substring(0, i) + polymer.substring(i + 2);
            }
        }
        if (polymer.length === lastLength) {
            return polymer.length;
        }
        lastLength = polymer.length;
    }
}

export default function Challenge05Part02() {
    // feed in input from AoC
    let polymer = returnInputText();

    // generate an array containing possible solutions
    return Array.from(new Array(26)).map((_, i) => [String.fromCharCode(i + 65), String.fromCharCode(i + 97)]).reduce((acc, [exclude1, exclude2]) => {
        const subInput = polymer.replace(new RegExp('[' + exclude1 + exclude2 + ']', 'g'), '');
        const result = doReactions(subInput, [exclude1, exclude2]);
        
        // get the smallest result
        return Math.min(acc, result);
    }, Number.POSITIVE_INFINITY);
}