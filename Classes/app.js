function getFighterInfo(object) {
    let fighter = Ext.create('Classes.Fighter', object);
    console.log(fighter.getInfo());
    fighter.go(0);
    fighter.go(20);

    return fighter.getInfo();
}
function run() {
    let conf = {
        "name": 'Vasya',
        "surname": 'Ivanov'
    };

    console.log(this.getFighterInfo(conf));

}