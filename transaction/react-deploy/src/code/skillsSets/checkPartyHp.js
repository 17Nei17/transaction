export default function checkPartyHp(partyCat) {
    if (partyCat.hp <= 0) {
        partyCat.isAlive = false;
    }
}