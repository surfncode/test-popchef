const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");

const environment = process.env.NODE_ENV;

if (environment === "development") {
	app.set('json spaces', 4);
}

app.use(bodyParser.json()); 

// jndb
app.get('/api/hello', function(req, res) {
	res.status(200).send('Yo man');
});

const port = process.env.NODE_APP_PORT || 3001;

http.createServer(app).listen({port: port}, function() {
	console.log(`app listening on  ${port}`);
});