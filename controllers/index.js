var routes = require('../routes');

var indexController = function(app){
	app.get('/', routes.index);
	app.get('/registro', routes.registro);
	app.get('/success', routes.success);
};

module.exports = indexController;