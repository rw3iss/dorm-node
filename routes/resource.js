module.exports = function(app, dorm) {
	app.get('/dorm/resource', function(req, res){
		res.render(dorm.basePath + '/views/resource');
	});
}