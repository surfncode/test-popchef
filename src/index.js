
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const db = require("./db");

const environment = process.env.NODE_ENV;


if (environment === "development") {
	app.set('json spaces', 4);
}

app.use(bodyParser.json());

// list dishes
app.get('/api/dish', async function(req, res) {
	const dishes = await db.listDishes();
	res.status(200).json({
		status: "ok",
		dishes: dishes,
	});
	// res.status(200).json(fakeDishResponse());
});

// list ingredients
app.get('/api/ingredient', async function(req, res) {
	const ingredients = await db.listIngredients();
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

// update dish
app.put('/api/dish/:dishId', async function(req, res) {
	await db.updateDish(req.params.dishId,req.body);
	res.status(200).json({
		status: "ok",
	});
});

// delete dish
app.delete('/api/dish/:dishId', async function(req, res) {
	await db.deleteDish(req.params.dishId);
	res.status(200).json({
		status: "ok",
	});
});

app.use(express.static('frontend/build'));

const port = process.env.PORT || 3001;

http.createServer(app).listen({
	port: port
}, function() {
	console.log(`app listening on  ${port}`);
});

