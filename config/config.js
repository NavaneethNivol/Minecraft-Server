const config = {

	app: {
		name: "Minecraft Server",
		version: "v1.0.0"
	},

	backup: {
		max_backups: 7,
		cron_job: '0 0 4 * * *'
	},

	minio: {
		access_key: process.env.MINIO_ACCESS_KEY || 'Minecraft',
		secret_key: process.env.MINIO_SECRET_KEY || 'Minecraft123',
		port: parseInt(process.env.MINIO_PORT) || 9000,
		endPoint: process.env.MINIO_ENDPOINT || 'localhost',
		useSSL: false
	}
};

module.exports = config;

// To convert js config to json

if (require.main == module) {
	var fs = require("fs");
	var path = require("path");

	console.log("The current config is \n\n\n");

	var config_string = JSON.stringify(config, null, 4);
	console.log(config_string);
	console.log("\n\n\n");

	// Write the config string to a file here, most preferably app_config.json
	var file_path = path.join(__dirname, "app_config.json");
	console.log("Saving the config file at:  " + file_path);
	console.log("\n\n\n");

	fs.writeFile(file_path, config_string, function (err) {
		if (err) {
			console.log("There is an error in writing the data to the file");
			console.log(err);
		} else {
			console.log("config file saved");
		}
	});
}