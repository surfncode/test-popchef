
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const db = require("./db");

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

// list dishes
app.get('/api/dish', async function(req, res) {
	const dishes = await db.listDishes();
	console.log("jndb /api/dish#dishes",dishes);
	res.status(200).json({
		status: "ok",
		dishes: dishes,
	});
	// res.status(200).json(fakeDishResponse());
});

// list ingredients
app.get('/api/ingredient', async function(req, res) {
	const ingredients = await db.listIngredients();
	console.log("jndb /api/ingredient#ingredients",ingredients);
	res.status(200).json({
		status: "ok",
		ingredients: ingredients,
	});
	// res.status(200).json(fakeDishResponse());
});

// view dishe by id
app.get('/api/dish/:dishId', async function(req, res) {
	const dish = await db.getDish(req.params.dishId);
	res.status(200).json({
		status: "ok",
		dish: dish,
	});
});

// create dish
app.post('/api/dish', async function(req, res) {
	const dishId = await db.createDish(req.body);
	res.status(200).json({
		status: "ok",
		dishId: dishId,
	});
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