module.exports = function(app, dorm) {
	app.get('/dorm/resouces', function(req, res){
		res.render(dorm.basePath + '/views/resources');
	});
}