
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

	async onClickDelete(event) {
		event.stopPropagation();
		const id = event.currentTarget.getAttribute("data-id");
		try {
			await api.deleteDish(id);
			const dishes = this.state.dishes.filter(dish => `${dish.id}` !== id);
			this.setState({dishes: dishes});
		}catch(error) {
		}
	}

	async componentDidMount() {
		const dishes = await api.listDishes();
		this.setState({dishes: dishes});
	}
}

export default List;
