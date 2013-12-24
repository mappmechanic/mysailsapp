/**
 * AppController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

 var utils = require('../services/customUtils');

module.exports = {
    
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to AppController)
   */
  _config: {},

  create : function(req,res)
  {
    // Upload the App Icon file to the server and create a new App Object
	var folder = 'icon';
	utils.saveUploadedFile(req.files.iconFile.path,req.files.iconFile.originalFilename,folder,function(err,newFileName){
	  var iconUrl  = "http://"+req.get("host")+"/uploads/"+folder+"/"+newFileName;
		 
		 req.body.iconUrl = iconUrl;

		 App.create(req.body,function(err,build){
		 	if(err)
		     res.send(500,err);

		 	res.send(build);
		 });  
	});
  }

  
};
