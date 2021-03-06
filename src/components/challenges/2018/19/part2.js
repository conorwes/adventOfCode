import returnInputText from './input'

const types = {
    // Addition
    addr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] + out[b];
        return out;
    },
    addi: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] + b;
        return out;
    },

    // Multiplication
    mulr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] * out[b];
        return out;
    },
    muli: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] * b;
        return out;
    },

    // Bitwise AND
    banr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] & out[b];
        return out;
    },
    bani: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] & b;
        return out;
    },

    // Bitwise Or
    borr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] | out[b];
        return out;
    },
    bori: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a] | b;
        return out;
    },

    // Assignment
    setr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = out[a];
        return out;
    },
    seti: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = a;
        return out;
    },

    // Greater-than testing
    gtir: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(a > out[b]);
        return out;
    },
    gtri: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(out[a] > b);
        return out;
    },
    gtrr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(out[a] > out[b]);
        return out;
    },

    // Equality testing
    eqir: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(a === out[b]);
        return out;
    },
    eqri: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(out[a] === b);
        return out;
    },
    eqrr: (reg, a, b, c) => {
        const out = reg.slice();
        out[c] = Number(out[a] === out[b]);
        return out;
    },
};

export default function Solution19Part02() {
    const input = returnInputText();
    return undefined;
};
