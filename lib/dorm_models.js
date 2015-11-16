var Promise = require('bluebird');

module.exports = function(dorm) {
	var modelsTableName = dorm.database.config.table_prefix + 'models';

	return {

	    findAll: function() {
	    	var model = dorm.database.collection(modelsTableName);

	    	return new Promise(function(resolve, reject) {
				model.select(options, function(err, data, fields) {
			        if(err) {
			            reject(err);
			        }

			        resolve(data);
			    });
		    });
	    },

	    find: function(modelName, cb) {
	        var model = dorm.database.collection(modelsTableName);

	        var options = {
	        	where: [
	        		["name","=",modelName]
	        	]
	        }
	        
		    return new Promise(function(resolve, reject) {
				model.select(options, function(err, data, fields) {
			        if(err) {
			            reject(err);
			        }

			        resolve(data);
			    });
		    });
	    }

	}
}