
const listDishes = async function() {
	const response = await fetch(`/api/dish`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		return;
	}
	const parsedResponse = await response.json();
	console.log("jndb /api/dish",parsedResponse)
	if(parsedResponse.status !== 'ok') {
		return;
	}
	return parsedResponse.dishes;
}

const getDish = async function(dishId) {
	const response = await fetch(`/api/dish/${dishId}`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(!response.ok) {
		return;
	}
	const parsedResponse = await response.json();
	console.log("jndb /api/dish",parsedResponse)
	if(parsedResponse.status !== 'ok') {
		return;
	}
	return parsedResponse.dish;
};

export {
	listDishes,
	getDish
};