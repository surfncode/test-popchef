
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const knex = require("./knexClient");

const environment = process.env.NODE_ENV;

console.log("jndb process.env.PORT",process.env.PORT);
console.log("jndb process.env.JAWSDB_MARIA_URL",process.env.JAWSDB_MARIA_URL);

if (environment === "development") {
	app.set('json spaces', 4);
}

app.use(bodyParser.json());

// jndb
app.get('/', function(req, res) {
	res.status(200).send('Yo mannn !');
});

// jndb
app.get('/api/hello', function(req, res) {
	res.status(200).send('Yo man');
});

app.get('/api/dish', function(req, res) {
	knex('dishes')
  	.then(rows => {
  		console.log("jndb /api/dish#rows",rows);
  		res.status(200).json({
  			status: "ok",
  			dishes: rows,
  		});
  	});
	// res.status(200).json(fakeDishResponse());
});


const port = process.env.PORT || 3001;

http.createServer(app).listen({
	port: port
}, function() {
	console.log(`app listening on  ${port}`);
});

// jndb
function fakeDishResponse() {
	return {
		status: "ok",
		dishes: [{
			id: 1,
			name: "Carottes rôties, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre balsamique blanc",
				"Sel",
				"Poivre",
			]
		}, {
			id: 2,
			name: "Carottes facies, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et farcies au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre de cidre",
				"Sel",
				"Poivre",
			]
		}, {
			id: 3,
			name: "Carottes facies, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et farcies au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre de cidre",
				"Sel",
				"Poivre",
			]
		}, {
			id: 4,
			name: "Carottes facies, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et farcies au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre de cidre",
				"Sel",
				"Poivre",
			]
		}, {
			id: 5,
			name: "Carottes facies, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et farcies au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre de cidre",
				"Sel",
				"Poivre",
			]
		}, {
			id: 6,
			name: "Carottes facies, sauce Grecque aux herbes et graines de courge",
			price: 20,
			hot: false,
			description: "Prenez des carottes taillées finement et farcies au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
			ingredients: [
				"Carotte",
				"Huile d'olive",
				"Miel",
				"Vinaigre de cidre",
				"Sel",
				"Poivre",
			]
		}]
	};
}