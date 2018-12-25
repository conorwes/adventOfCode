import returnInputText from './input'

const ops = {
	addr: (r, a, b) => r[a] + r[b],
	addi: (r, a, b) => r[a] + b,
	mulr: (r, a, b) => r[a] * r[b],
	muli: (r, a, b) => r[a] * b,
	banr: (r, a, b) => r[a] & r[b],
	bani: (r, a, b) => r[a] & b,
	borr: (r, a, b) => r[a] | r[b],
	bori: (r, a, b) => r[a] | b,
	setr: (r, a) => r[a],
	seti: (r, a) => a,
	gtir: (r, a, b) => a > r[b] ? 1 : 0,
	gtri: (r, a, b) => r[a] > b ? 1 : 0,
	gtrr: (r, a, b) => r[a] > r[b] ? 1 : 0,
	eqir: (r, a, b) => a === r[b] ? 1 : 0,
	eqri: (r, a, b) => r[a] === b ? 1 : 0,
	eqrr: (r, a, b) => r[a] === r[b] ? 1 : 0
};

export default function Solution21Part02(){
    const lines = returnInputText().split(/\n/g);

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

    let registers = [0, 0, 0, 0, 0, 0];

    let found = {};
    let last = 0;

    while(registers[ip] >= 0 && registers[ip] < instructions.length)
    {
        if(registers[ip] === 28) {
            if(found[registers[4]]) {
                return last;
                break;
            }
            else {
                found[registers[4]] = true;
                last = registers[4];
            }
        }
        let current = instructions[registers[ip]];

        let result = ops[current[0]](registers, current[1], current[2]);

        registers[current[3]] = result;

        registers[ip]++;
	}
}