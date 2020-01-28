Ext.define('Classes.Horse' ,{
    config: {
        name: 'Plotva',
        speed: 0,
    },
    constructor: function (config) {
        this.initConfig(config)
    },
    drive: function(speed) {
        this.speed=speed;
        if(speed>0){
            console.log("Лошадь скачет");
        }
        else{
            console.log("Лошадь стоит");
        }
    },
})