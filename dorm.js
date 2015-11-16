var _ = require('underscore');
var Exceptions = require('./lib/dorm_utils').Exceptions;

module.exports = {
  basePath: __dirname,

  //accessor to the initialized database
  database: null, 

  //sets up dorm, routes, etc
  init: function(app, options) {
    var dorm = this;

    //load dorm routes
    require('./routes/_routes.js')(app, dorm);

    if(typeof options.dbConfig == 'undefined') {
      throw new Exceptions.ArgumentException("dbConfig property must be defined in the dorm options argument");
    }

    //setup database
    var db = require('./lib/database.js')(app, options.dbConfig);

    //todo: put db in cache
    this.database = db;
  },


  /* Accessors to the underlying data libraries */

  Models: function(options) {
    if(this.database == null) {
      throw new Exceptions.DatabaseException("Database is not initialized.");
    }

    var models = require('./lib/dorm_models.js')(this);
    return models;
  },

  Resources: function(options) {
    if(this.database == null) {
      throw new Exceptions.DatabaseException("Database is not initialized.");
    }

    var resources = require('./lib/dorm_resources.js')(this);
    return resources;
  }
}