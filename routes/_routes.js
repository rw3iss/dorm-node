
module.exports = function(app, dorm) {
	require('./login')(app, dorm);
	
	require('./dashboard')(app, dorm);

	//models listings
	require('./models')(app, dorm);

	//specific model routes
	require('./model')(app, dorm);

	//resources listings
	require('./resources')(app, dorm);

	//specific resource routes
	require('./resource')(app, dorm);

	//settings route
	require('./settings')(app, dorm);
};
