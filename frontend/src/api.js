
const listDishes = async function() {
	const response = await fetch(`/api/dish`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return parsedResponse.dishes;
};

const getDish = async function(dishId) {
	const response = await fetch(`/api/dish/${dishId}`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return parsedResponse.dish;
};

const listIngredients = async function() {
	const response = await fetch(`/api/ingredient`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return parsedResponse.ingredients;
};

const createDish = async function(dish) {
	const response = await fetch(`/api/dish`,{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dish)
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return parsedResponse.dishId;
};

const updateDish = async function(dish) {
	const response = await fetch(`/api/dish/${dish.id}`,{
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dish)
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return true;
};

const deleteDish = async function(dishId) {
	const response = await fetch(`/api/dish/${dishId}`,{
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		throw new Error("fetch error");
	}
	const parsedResponse = await response.json();
	if(parsedResponse.status !== 'ok') {
		throw new Error(parsedResponse.status);
	}
	return true;
};

export {
	listDishes,
	getDish,
	listIngredients,
	createDish,
	updateDish,
	deleteDish,
};