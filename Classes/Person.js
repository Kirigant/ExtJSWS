Ext.define('Classes.Person', {
    config: {
        name: 'Рома',
        surname: 'Иванов',
        age: 18
    },
    singleton: true,
    getBirhDate: function () {
        let dt = new Date();
        dt.setFullYear(dt.getFullYear() - this.age);
        return dt.toDateString();
    },
    getInfo: function () {
        console.log("Полное имя: " + this.surname + " " + this.name + ". Дата рождения: " + this.getBirhDate());
    },
    constructor: function (config) {
        this.initConfig(config);
    }
});