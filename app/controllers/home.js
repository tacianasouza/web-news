module.exports.index = function(application, req, res){

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);	

    // exibir as 5 últimas notícias
    noticiasModel.getUltimasNoticias(function(error, result) {
    	res.render('home/index', {noticias: result});
    });
}