/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // If you leave the adapter config unspecified 
  // in a model definition, 'default' will be used.
  'default': 'myLocalMySQLDatabase',

  // Persistent adapter for DEVELOPMENT ONLY
  // (data is preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  memory: {
    module: 'sails-memory'
  },

  // MySQL is the world's most popular relational database.
  // Learn more: http://en.wikipedia.org/wiki/MySQL
  myLocalMySQLDatabase: {

    module: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    // Psst.. You can put your password in config/local.js instead
    // so you don't inadvertently push it up if you're using version control
    password: '', 
    database: 'demo'
  },

  herokuMySql: {

    module: 'sails-mysql',
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b88e3389cd11b9',
    // Psst.. You can put your password in config/local.js instead
    // so you don't inadvertently push it up if you're using version control
    password: '45a2fbd1', 
    database: 'heroku_0ffe19e3da9cd21'
  }
};