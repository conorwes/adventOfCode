import returnInputText from './input'

export default function Solution25Part01() {
    let lines = returnInputText().split(/\n/g);
    let constellations = [];
    for(let line of lines) {
        let values = line.split(',').map(x => +x);

        let parent;
        let conIndex = 0;
        conLoop: while(conIndex < constellations.length) {
            let c = constellations[conIndex];
            for(let point of c) {
                let distance = Math.abs(point[0] - values[0]) + Math.abs(point[1] - values[1]) + Math.abs(point[2] - values[2]) + Math.abs(point[3] - values[3]);

                if(distance <= 3) {
                    if(parent) {
                        parent.push(...c);
                        constellations.splice(conIndex, 1);
                    }
                    else {
                        parent = c;
                        parent.push(values);
                        conIndex++;
                    }
                    continue conLoop;
                }
            }

            conIndex++;
        }

        if(!parent) {
            constellations.push([values]);
        }
    }
    return constellations.length;
}