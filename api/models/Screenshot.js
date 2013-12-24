/**
 * Screenshot
 *
 * @module      :: Model
 * @description :: This model represent a Screenshot Image of an App for a specific Device Type
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  
  schema:'true',

  attributes: {
  	appId:{
  		type:"string",
  		required:"true"
  	},
  	screenshotUrl:{
  		type:"string",
  		required:"true"
  	},
  	deviceType:{
  		type:"string",
  		required:"true",
  		in:["tablet","phone","phablet"]
  	},
  	uploadedBy:{
  		type:"integer",
  		required:"true"
  	}
  }

};
