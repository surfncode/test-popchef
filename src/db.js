
const knex = require("./knexClient");

function listDishes() {
	return knex('dishes');
}

async function getDish(dishId) {
	const dish = await knex('dishes').where({id: dishId}).first();
	const ingredients = await knex()
		.from('dishIngredients')
		.pluck('ingredients.name')
		.join('ingredients',{'dishIngredients.ingredientId': 'ingredients.id'})
		.where({dishId: dishId});
	dish.ingredients = ingredients && ingredients.length ? ingredients : [];
	return dish;
}

function listIngredients() {
	return knex('ingredients').pluck('name');
}

async function createDish(dish) {
	const newDish = Object.assign({},dish);
	const ingredients = newDish.ingredients;
	delete newDish.ingredients;
	const dishIds = await knex('dishes').insert(newDish);
	const dishId = dishIds[0];
	await addDishIngredients(dishId,ingredients);
	return dishId;
}

async function addDishIngredients(dishId,ingredients) {
	const ingredientIds = await knex("ingredients").pluck("id").whereIn("name",ingredients);
	if(ingredientIds.length === 0) {
		return false;
	}
	const dishIngredients = ingredientIds.map(ingredientId => {
		return {dishId: dishId, ingredientId: ingredientId};
	});
	await knex("dishIngredients").insert(dishIngredients);
	return true;
}

async function updateDish(dishId,dish) {
	const newDish = Object.assign({},dish);
	const ingredients = newDish.ingredients;
	delete newDish.ingredients;
	delete newDish.id;
	await knex('dishes').where({id: dishId}).update(newDish);
	await clearDishIngredients(dishId);
	await addDishIngredients(dishId,ingredients);
	return dishId;
}

function clearDishIngredients(dishId) {
	return knex("dishIngredients").where({dishId: dishId}).del();
}

function deleteDish(dishId) {
	return knex("dishes").where({id: dishId}).del();
}

module.exports = {
	listDishes,
	getDish,
	listIngredients,
	createDish,
	updateDish,
	deleteDish,
}