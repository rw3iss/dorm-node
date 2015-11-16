module.exports = function(app, dorm) {
	app.get('/dorm', function(req, res){
		//TODO: check user is logged in and forward to dashboard
		res.render(dorm.basePath + '/views/dashboard');
	});

	app.get('/dorm/dashboard', function(req, res){
		res.render(dorm.basePath + '/views/dashboard');
	});
};