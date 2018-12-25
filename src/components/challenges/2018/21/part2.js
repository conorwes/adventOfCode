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

    return undefined;
}