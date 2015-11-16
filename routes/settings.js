module.exports = function(app, dorm) {
	app.get('/dorm/settings', function(req, res){
		res.render(dorm.basePath + '/views/settings');
	});
}