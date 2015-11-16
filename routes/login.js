module.exports = function(app, dorm) {
	app.get('/dorm/login', function(req, res){
		res.render(dorm.basePath + '/views/login');
	});
};