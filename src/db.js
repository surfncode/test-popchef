
const knex = require("./knexClient");

function listDishes() {
	return knex('dishes');
}

async function getDish(dishId) {
	const dish = await knex('dishes').where({id: dishId}).first();
	console.log(`jndb getDish${dishId}#dish`,dish);
	const ingredients = await knex()
		.from('dishIngredients')
		.pluck('ingredients.name')
		.join('ingredients',{'dishIngredients.ingredientId': 'ingredients.id'})
		.where({dishId: dishId});
	console.log(`jndb getDish${dishId}#ingredients`,ingredients);
	dish.ingredients = ingredients && ingredients.length ? ingredients : [];
	return dish;
}

module.exports = {
	listDishes,
	getDish
}