/**
 * Build
 *
 * @module      :: Model
 * @description :: This model represents a Build for a specific App in an Enterprise AppStore
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

 schema:'true',
  attributes: {
  	appId:{
  		type:"integer",
  		required:"true"
  	},
  	buildVersion:{
  		type:"string",
  		required:"true"
  	},
  	platform:{
  		type:"string",
  		required:"true",
  		in:["ios","android","windows","blackberry","web"]
  	},
  	targetDevice:{
  		type:"string",
  		required:"true",
  		in:["tablet","phone","phablet","all"]
  	},
  	packageUrl:{
  		type:"string"
  	},
  	releaseNotes:{
  		type:"string"
  	},
  	buildSize:{
  		type:"integer"
  	},
  	uploadedBy:{
  		type:"string"
  	}
    
  }

};
