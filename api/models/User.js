/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
          
    email: {
      type: 'string',
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      required: true,
      minLength: 6
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 4
    },
    createdAt:'DATE',
    updatedAt:'DATE'
  },

  beforeCreate: function (attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.hash(attrs.password, 10, function(err, hash) {
      if (err) return next(err);

      attrs.password = hash;
      next();
    });
  }

};
