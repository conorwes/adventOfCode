import returnInputText from "./input"

export default function Solution01Part01() {
    // feed in input from AoC
    let input = returnInputText();

    // get the actual values to use, and translate them into numbers
    let deltas = input.split(/\n/g).map(Number);

    // do the summation
    let result = deltas.reduce((frequency, change) => frequency + change, 0);

    // return the output
    return result;
}