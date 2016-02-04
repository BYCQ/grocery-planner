import React from 'react'

export class DishCard extends React.Component {
	render() {
		const { dishTitle } = this.props;
		return (
			<div className="card" style={{width: '100%'}}>
			  <img className="card-img-top" src="http://placehold.it/253x150" alt="Card image cap" />
			  <div className="card-block">
			    <h4 className="card-title">{dishTitle}</h4>
			    <p className="card-text">Chicken soup</p>
			    <a href="#" className="btn btn-primary">Add to basket</a>
			  </div>
			</div>
		);
	}
}