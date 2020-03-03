Ext.define('Classes.Fighter', {
    extend: 'Classes.Person',
    mixins: {
        horse: 'Classes.Horse'
    },
    config: {
        strength: 5
    },
    applyName: function(name){
        if (name === 'Vasya') {alert('Какой я тебе нахрен Вася???!!!')}
        name = name.replace(/\s/g, '');
        if(name.length===0){
            alert('Имя не может быть равно нулю');
        }
        else{
            return name;
        }
    },
    constructor: function (name, surname, age, strength) {
        this.initConfig();
        if(strength){
            this.setStrength(strength);
        }
        this.callParent([name, surname, age]);
    },
    getDate: function(){
        return new Date().toDateString();
    },
    getInfo: function () {
        this.callParent();
        console.log('Strength: ' + this.getStrength());
    },
    go: function (speed) {
        this.drive(speed);
    }
});