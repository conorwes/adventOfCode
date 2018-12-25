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

const parseInput = (input) => {
	const lines = input.split('\n');
	const bound = parseInt(lines[0].split(' ')[1]);
	const program = lines.slice(1).map(line => {
		const [op, a, b, c] = line.split(' ');
		return {
			op,
			a: parseInt(a),
			b: parseInt(b),
			c: parseInt(c)
		};
	});
	return { bound, program };
};

export default function Solution21Part01(){
    const input = returnInputText();

    const { bound, program } = parseInput(input);

    const register = [0, 0, 0, 0, 0, 0];

    while (register[bound] >= 0 && register[bound] < program.length) {
        const { op, a, b, c } = program[register[bound]];
        if (op === 'eqrr' && b === 0) {
            return register[a];
        }
        register[c] = ops[op](register, a, b);
        register[bound]++;
    }
}