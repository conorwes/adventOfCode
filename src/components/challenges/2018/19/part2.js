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

    let lines = input.split(/\n/g);
    let ipLine = lines.shift();
    let ip = +(ipLine.split(' ')[1]);

    let instructions = [];
    for(let line of lines) {
        instructions.push(line.split(' ').map(x => {
            if(isNaN(+x)) {
                return x;
            }
            return +x;
        }));
    }

    let registers = [1, 0, 0, 0, 0, 0];

    //The input program will not finish for a very long time, so we'll have to shortcut
    //First, let the program finish its "initialization" logic, which is done
    //once it's about to execute instruction 1
    while(registers[ip] !== 1)
    {
        // for some reason, sometimes we get nan instead of 0...check here
        registers[ip] = registers[ip] || 0;

        let current = instructions[registers[ip]];

        let result = types[current[0]](registers, current[1], current[2]);

        registers[current[3]] = result;

        registers[ip]++;
    }

    //Now the program has put a large number in some register.
    //It proceeds to very inefficiently calculate the sum of that number's factors
    //we're going to do so more efficiently
    let target = Math.max(...registers);
    let sqrt = Math.sqrt(target);
    let sum = 0;

    for(let i = 1; i < sqrt; i++) {
        if(target % i === 0) {
            sum += i + target / i;
        }
    }

    if(sqrt === Math.floor(sqrt)) {
        sum += sqrt;
    }

    return sum;
};
