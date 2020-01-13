
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './View.css';

class View  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("jndb render View");
		const dish = this.state.dish;
		const content =  dish ? this.renderDish(dish) : this.renderLoading();
		return (
			<Container>
				<Row>
					<Col md={2}></Col>
					<Col md={8}>
						{content}
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		);
	}

	renderDish(dish) {
		return (
			<Card className="ViewDish">
			  <Card.Img variant="top" src="/default-dish.jpeg" />
			  <Card.Body>
			  <Card.Title>{dish.name}<span className="Price">{dish.price} €</span></Card.Title>
			    <Card.Text>{dish.description}</Card.Text>
			    <Link to={"/"}>
			    	<Button variant="primary">Close</Button>
			    </Link>
			  </Card.Body>
			</Card>
		);
	}

	renderLoading() {
		return (<Spinner animation="border" />);
	}

	componentDidMount() {
		this.setState({dish: getDish()});
	}
}

// jndb
function getDish() {
	return {
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
	};
}

export default View;