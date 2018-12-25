import returnInputText from './input'

function effectivePower(unit) {
    return unit.count * unit.attackDamage;
}

function getDamage(attacker, defender) {
    let damage = effectivePower(attacker);

    if (defender.weak.indexOf(attacker.attackType) >= 0) {
        damage *= 2;
    }

    if (defender.immune.indexOf(attacker.attackType) >= 0){
        damage = 0;
    }

    return damage;
}

export default function Solution24Part02() {
    let lines = returnInputText().split(/\n/g);
    return undefined;
}