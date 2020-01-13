
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import './List.css';

const history = useHistory();

class List  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: getDishes(),
		};

		this.renderDish = this.renderDish.bind(this);
		this.onClickCard = this.onClickCard.bind(this);
		this.onClickUpdate = this.onClickUpdate.bind(this);

		// this.history = useHistory();
	}

	render() {
		return (
			<div className="List"> {this.state.dishes.map(this.renderDish)} </div>
		);
	}

	renderDish(dish) {
		return (
			<Card className="Dish" key={dish.id} data-id={dish.id} onClick={this.onClickCard}>
			  <Card.Img variant="top" src="default-dish.jpeg" />
			  <Card.Body>
			    <Card.Title>{dish.name}<span className="Price">{dish.price} €</span></Card.Title>
			    <Card.Text>{dish.description}</Card.Text>
			    <Button variant="primary" data-id={dish.id} onClick={this.onClickUpdate}>Update</Button>
			    <Button variant="danger" data-id={dish.id} onClick={this.onClickDelete}>Delete</Button>
			  </Card.Body>
			</Card>
		);
	}

	onClickCard(event) {
		// const history = useHistory();
		const id = event.currentTarget.getAttribute("data-id");
		console.log("jndb onClickCard",id);
		history.push("/view/"+id);

	}

	onClickUpdate(event) {
		event.stopPropagation();
		const id = event.currentTarget.getAttribute("data-id");
		console.log("jndb onClickUpdate",id);
	}

	onClickDelete(event) {
		event.stopPropagation();
		const id = event.currentTarget.getAttribute("data-id");
		console.log("jndb onClickDelete",id);
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