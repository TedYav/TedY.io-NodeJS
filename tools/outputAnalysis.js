import webpack from 'webpack';
import webpackConfig from './webpack.config';

var fs = require('fs');

function outputAnalysis(){
	return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err);
      }

    	fs.writeFile("client-analysis.json", JSON.stringify(stats.toJson(webpackConfig)), function(err2) {
		if(err2) {
		    return console.log(err);
		}
		console.log("Wrote client analysis!");
		}); 

    	fs.writeFile("server-analysis.json", JSON.stringify(stats.toJson(webpackConfig)), function(err2) {
		if(err2) {
		    return console.log(err);
		}
		console.log("Wrote server analysis!");
		}); 

      return resolve();
    });
  });
}

export default outputAnalysis;