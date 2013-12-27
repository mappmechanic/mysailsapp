/**
 * BuildController
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
   * (specific to BuildController)
   */
  _config: {},

  create : function(req,res)
  {
    // Upload the Build file to the server along with the Metadata
	var folder = 'build';
	utils.saveUploadedFile(req.files.buildFile.path,req.files.buildFile.originalFilename,folder,function(err,newFileName){
	  var packageUrl  = "http://"+req.get("host")+"/uploads/"+folder+"/"+newFileName;
		 
		 req.body.packageUrl = packageUrl;
		 req.body.buildSize = req.files.buildFile.size;

		 Build.create(req.body,function(err,build){
		 	if(err)
		     res.send(500,err);

		 	res.send(build);
		 });  
	});

  },

  'getMetaData.plist':function(req,res)
  {
  	var buildId = req.query.buildId;
  	if(buildId != undefined) {

  		Build.findOne(buildId).done(function(err,build){
  			if(err) 
  				res.send(500,{errorMsg: "Invalid BuildId in the request."});

  			console.log(build);

  			if(build.platform != 'ios')
  				res.send(500,{errorMsg: "Plist file is required for only iOS Builds."});


  			App.findOne(build.appId).done(function(err,app){

  				console.log(app);

  				res.set('Content-Type', 'text/xml');
			  	var buildUrl = build.packageUrl;
			  	res.send(buildPlistXml(buildUrl,app.bundleIdentifier,build.buildVersion,app.appName));	
  			});		
  		});

	  	
  	}else
  	  res.send(500,{errorMsg: "Invalid BuildId in the request."});
  }
  
};


function buildPlistXml(ipaUrl,bundleId,version,appName)
{
  var xmlData = '<?xml version="1.0" encoding="UTF-8"?>'+
	'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">'+
	'<plist version="1.0"><dict><key>items</key>'+
	'<array><dict><key>assets</key>'+
	'<array><dict><key>kind</key><string>software-package</string>'+
	'<key>url</key><string>'+ipaUrl+'</string></dict></array>'+
	'<key>metadata</key><dict>'+
	'<key>bundle-identifier</key><string>'+bundleId+'</string>'+
	'<key>bundle-version</key><string>'+version+'</string>'+
	'<key>kind</key><string>software</string>'+
	'<key>title</key><string>'+appName+'</string>'+
	'</dict></dict></array></dict></plist>';
  return xmlData;
}


