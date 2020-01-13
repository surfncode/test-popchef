
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link,Redirect } from "react-router-dom";
import * as api from "./api";

class UpdateCreate  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onClickSave = this.onClickSave.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
		this.onChangeHot = this.onChangeHot.bind(this);
		this.onChangeIngredient = this.onChangeIngredient.bind(this);
	}

	render() {
		if(this.state.saved) {
			return (<Redirect to="/" /> );
		}
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

	renderSaved() {
		return ;
	}

	renderDish(dish) {
		return (

			<div>
				<Form>
				  <Form.Group controlId="name">
				    <Form.Label>Name</Form.Label>
				    <Form.Control type="text" value={dish.name} 
				    	placeholder="Enter name" onChange={this.onChangeName}/>
				  </Form.Group>
				  <Form.Group controlId="description">
				    <Form.Label>Description</Form.Label>
				    <Form.Control as="textarea" value={dish.description} 
				    	rows="3"
				    	placeholder="Enter description" onChange={this.onChangeDescription}/>
				  </Form.Group>
				  <Form.Group controlId="price">
				    <Form.Label>Price</Form.Label>
				    <Form.Control type="text" value={dish.price} 
				    	placeholder="Enter price" onChange={this.onChangePrice}/>
				  </Form.Group>
				  <Form.Group controlId="hot">
				    <Form.Check type="checkbox" label="Hot" checked={dish.hot}
				    	onChange={this.onChangeHot}/>
				  </Form.Group>
				  <Form.Group controlId="ingredients">
				  	<Form.Label>Ingredients</Form.Label>
				  	{this.renderIngredients(dish.ingredients)}
				  </Form.Group>
				</Form>
				<Button variant="primary" onClick={this.onClickSave}>Save</Button>
				<Link to={"/"}>
					<Button variant="secondary">Cancel</Button>
				</Link>
			</div>
		);
	}

	renderLoading() {
		return (<Spinner animation="border" />);
	}

	async onClickSave(event) {
		if(this.props.id) {
			await api.updateDish(this.state.dish);
		}else {
			await api.createDish(this.state.dish);	
		}
		this.setState({saved: true});
	}

	async componentDidMount() {
		const ingredients = await api.listIngredients();
		const dish = this.props.id ? 
			await api.getDish(this.props.id) :
			getDefaultDish();
		this.setState({
			dish: dish, 
			allIngredients: ingredients,
		});
	}

	onChangeName(event) {
		const name = event.currentTarget.value;
		this.setState({dish: Object.assign({},this.state.dish,{name: name})});
	}

	onChangeDescription(event) {
		const description = event.currentTarget.value;
		this.setState({dish: Object.assign({},this.state.dish,{description: description})});
	}

	onChangePrice(event) {
		const price = event.currentTarget.value;
		this.setState({dish: Object.assign({},this.state.dish,{price: price})});
	}

	onChangeHot(event) {
		const hot = event.currentTarget.checked;
		this.setState({dish: Object.assign({},this.state.dish,{hot: hot})});
	}

	onChangeIngredient(event) {
		const ingredient = event.currentTarget.getAttribute('data-id');
		const checked = event.currentTarget.checked;
		const ingredients = this.state.dish.ingredients;
		const newIngredients = checked ? 
			ingredients.concat(ingredient) : 
			ingredients.filter(currentIngredient => ingredient!==currentIngredient);
		const newDish = Object.assign({},this.state.dish,{ingredients: newIngredients});
		this.setState({dish: newDish});
	}

	renderIngredients(ingredients) {
		const reducer = (accumulator,value) => {
			accumulator[value] = true;
			return accumulator;
		};
		const hasIngredient = ingredients.reduce(reducer,{});
		return this.state.allIngredients.map(
			(ingredient,index) => (
				<Form.Check id={`ingredient-${index}`} type="checkbox" key={ingredient} label={ingredient} 
					checked={!!hasIngredient[ingredient]}
				    data-id={ingredient} onChange={this.onChangeIngredient}/>
			)
		);
	}

}

function getDefaultDish() {
	return {
		hot: false,
		name: "",
		price: "",
		description: "",
		ingredients: []
	};
}

export default UpdateCreate;