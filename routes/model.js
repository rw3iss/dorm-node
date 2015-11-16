module.exports = function(app, dorm) {
	app.get('/dorm/model', function(req, res){
		res.render(dorm.basePath + '/views/model');
	});
}