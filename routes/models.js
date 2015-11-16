module.exports = function(app, dorm) {
	app.get('/dorm/models', function(req, res){
		res.render(dorm.basePath + '/views/models');
	});
}