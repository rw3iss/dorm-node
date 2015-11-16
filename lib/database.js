/* Wrapper for Mongoose implementation to DORM data layer */

var Accessor = require('Accessor');
var Exceptions = require('./dorm_utils').Exceptions;

module.exports = function(app, dbConfig) {
	var self = this;

	try {
		this.dbEngine = require("Accessor_" + dbConfig.engine);
	} catch(e) {
		throw new Exceptions.DatabaseException("Database engine not set in config or database engine not available");
	}

	self.dbEngine.setConfig(dbConfig);

	return {
		//store the config
		config: dbConfig,

		//single underlying accessor to the Accessor library/collection. Should only be used internally.
		collection: function(name) {
			return Accessor(name, this.config.engine);
		}
	}
}