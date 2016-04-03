
var exec = require('child_process').exec;

var url = process.argv[2];
//https://api.clarifai.com/v1/tag/?url=https://samples.clarifai.com/metro-north.jpg
var cmd = 'curl "' + url + '" \
	-H "Authorization: Bearer 7qiEkb9A8Dr3Wgter6qTU8R66F3hIl"';
	
//console.log(cmd);
	
exec(cmd, function(error, stdout, stderr) {
	console.log(stdout + "\n");
	var ret = JSON.parse(stdout);
	//console.log(ret.results[0].result.tag.classes);
	//var tags = ret["classes"];
	//console.log(tags);
});