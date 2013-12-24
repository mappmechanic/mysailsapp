/**
 * CustomUtils.js - Utility Services
 *
 * @module      :: Services
 * @description	:: A set of methods that will be used by the controllers very often.
 *
 * @author        :: Rahat Khanna
 */

var fs = require('fs');

module.exports = {

	// Function to save an uploaded file to the 'folder' inside the /assets/uploads/ folder
	saveUploadedFile : function(oldPath,oldFileName,folder,callback)
	{
		var finalErr = {errorCode:0,errorObj:null};
		var that = this;
	    fs.readFile(oldPath, function (err, data) {
		  // ...

		  var newFileName = that.randomString(4)+"-"+oldFileName;
		  var newPath = __dirname + "/../../assets/uploads/"+folder+"/"+newFileName;
		  fs.writeFile(newPath, data, function (err) {
		  if(err)
		     finalErr = {errorCode:500,errorObj:err};
		  callback(finalErr,newFileName);
		});
	  });

		
	},

	// A function to create a random string of required length from a given character set
	randomString : function(len, charSet) {
	    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';
	    var randomString = '';
	    for (var i = 0; i < len; i++) {
	    	var randomPoz = Math.floor(Math.random() * charSet.length);
	    	randomString += charSet.substring(randomPoz,randomPoz+1);
	    }
	    return randomString;
	}

};