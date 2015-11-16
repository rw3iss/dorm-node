module.exports = function(app, dorm) {
	app.get('/dorm/install', function(req, res){
		res.render(dorm.basePath + '/views/install');
	});
};