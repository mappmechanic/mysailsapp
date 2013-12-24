/**
 * App
 *
 * @module      :: Model
 * @description :: This model represents a Mobile App entity in an Enterprise Appstore object
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema:'true',
  attributes: {
  	appName:{
  		type:"string",
  		required:"true",
  		unique:"true"
  	},
	appDescription:{
		type:"string"
	},
	bundleIdentifier:{
		type:"string",
		required:"true"
	},
	iconUrl:{
		type:"string"
	},
	isPublic:{
		type:"boolean"
	}
  }

};
