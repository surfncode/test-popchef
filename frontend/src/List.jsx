
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import * as api from "./api";
import './List.css';


class List  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: getDishes(),
		};

		this.renderDish = this.renderDish.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
	}

	render() {
		return (
			<div className="List"> 
				<Link to="create" className="Create"> <Button variant="primary">Create</Button> </Link>
				<div className="ListContainer">
					{this.state.dishes.map(this.renderDish)} 
				</div>
			</div>
		);
	}

	renderDish(dish) {
		const viewUrl = `view/${dish.id}`;
		return (
			<Card className="Dish" key={dish.id} data-id={dish.id} onClick={this.onClickCard}>
			  <Link to={viewUrl}><Card.Img variant="top" src="/default-dish.jpeg" /></Link>
			  <Card.Body>
			  <Card.Title>{dish.name}<span className="Price">{dish.price} €</span></Card.Title>
			    <Card.Text>{dish.description}</Card.Text>
			    <Link to={viewUrl}>
			    	<Button variant="primary">View</Button>
			    </Link>
			    <Link to={"update/"+dish.id}>
			    	<Button variant="primary">Update</Button>
			    </Link>
			    <Button variant="danger" data-id={dish.id} onClick={this.onClickDelete}>Delete</Button>
			  </Card.Body>
			</Card>
		);
	}

	onClickDelete(event) {
		event.stopPropagation();
		const id = event.currentTarget.getAttribute("data-id");
		console.log("jndb onClickDelete",id);
		const dishes = this.state.dishes.filter(dish => `${dish.id}` !== id);
		this.setState({dishes: dishes});
	}

	async componentDidMount() {
		console.log("jndb list new");
		const dishes = await api.listDishes();
		this.setState({dishes: dishes});
		// jndb
		// const response = await fetch(`/api/dish`,{
		// 	method: 'GET',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// });
		// if(!response.ok) {
		// 	return;
		// }
		// const parsedResponse = await response.json();
		// console.log("jndb /api/dish",parsedResponse)
		// if(parsedResponse.status !== 'ok') {
		// 	return;
		// }
		// this.setState({dishes: parsedResponse.dishes});
	}
}

// jndb
function getDishes() {
	return [
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	}
	];
}

export default List;
