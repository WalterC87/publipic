
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PubliPic | participa, diviértete y gana' });
};

exports.registro = function(req, res){
	res.render('registro',{title: 'PubliPic | Regístrate y gana'});
};

exports.success = function(req, res){
	res.render('success', {title: 'PubliPic | Gracias por creer en nosotros'});
};

exports.registro_existe = function(req,res){
	res.render('existe', {title: 'PubliPic | Ya eres parte de esta nueva experiencia'})
}