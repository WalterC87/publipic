var routes = require('../routes');

var indexController = function(app){
	app.get('/', routes.index);
	app.get('/registro', routes.registro);
	app.get('/success', routes.success);
	app.get('/registro/existe', routes.registro_existe);
};

module.exports = indexController;