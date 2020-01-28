Ext.onReady(function() {
    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [
            {
                title: 'Приложение на Ext JS 6',
                html: '<h3>Насяльника, не ругай пазалста.</h3>' +
                      '<body><input type="button" value="Жмяк!" id="elem" onclick="alert(getInfo())"></body>'
            }
        ]
    });
});

function getInfo() {
    var person = Ext.create('Classes.Person');
    var person2 = new Classes.Person('Роман', "Виктюк", 45);

    var result = person.getInfo().toString() + "\n" + person2.getInfo().toString();
    return result;
}