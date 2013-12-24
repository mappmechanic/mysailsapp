/**
 * ScreenshotController
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

var fs = require('fs');
var utils = require('../services/customUtils');

module.exports = {
    
   /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ScreenshotController)
   */
  _config: {},

  create : function(req,res)
  {

	 //  fs.readFile(req.files.screenshotFile.path, function (err, data) {
		//   // ...

		//   var newFileName = utils.randomString(4)+"-"+req.files.screenshotFile.originalFilename;
		//   var newPath = __dirname + "/../../assets/uploads/screenshots/"+newFileName;
		//   fs.writeFile(newPath, data, function (err) {
		//     if(err)
		//      res.send(500,err);

		 //  var screenShotUrl  = "http://"+req.get("host")+"/uploads/screenshots/"+newFileName;
		 
		 // req.body.screenshotUrl = screenShotUrl;
		 // Screenshot.create(req.body,function(err,screenshot){
		 // 	if(err)
		 //     res.send(500,err);

		 // 	res.send(screenshot);
		 // });  
		// });
	 //  });
	var folder = 'screenshot';
	utils.saveUploadedFile(req.files.screenshotFile.path,req.files.screenshotFile.originalFilename,folder,function(err,newFileName){
	  var screenShotUrl  = "http://"+req.get("host")+"/uploads/"+folder+"/"+newFileName;
		 
		 req.body.screenshotUrl = screenShotUrl;
		 Screenshot.create(req.body,function(err,screenshot){
		 	if(err)
		     res.send(500,err);

		 	res.send(screenshot);
		 });  
	});

  }
  
};
