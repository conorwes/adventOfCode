import returnInputText from './input'

export default function Solution23Part01 () {
    let lines = returnInputText().split(/\n/g);
    let bots = [];
    let strongBot = {range:0};
    for(let line of lines) {
        let parsed = /pos=<(-?\d+),(-?\d+),(-?\d+)>, r=(\d+)/.exec(line);
        let newBot = {x: +parsed[1], y: +parsed[2], z: +parsed[3], range: +parsed[4]};
        bots.push(newBot);
        if(newBot.range > strongBot.range) {
            strongBot = newBot;
        }
    }

    let count = 0;
    for(let bot of bots) {
        let distance = Math.abs(bot.x - strongBot.x) + Math.abs(bot.y - strongBot.y) + Math.abs(bot.z - strongBot.z);
        if(distance <= strongBot.range) {
            count++;
        }
    }

    return count;
}