import React, { Component } from 'react';
import classNames from 'classnames';

class ListCard  extends Component{
	constructor(){
		super();
		this.state = {
			cardSelected: false
		}
	}

chooseDinnerSpot(){
      let lat = this.props.deets.coordinates.latitude;
      let near = this.props.deets.location.city;
      let price = this.props.deets.price.length;
     
  this.props.setDinnerChoice(this.props.deets)
  this.props.getDinnerListings('bars', near, 2)
  console.log("YOYO", this.props.deets )
  this.setState({
    cardSelected: !this.state.cardSelected
  })
}

chooseDrinkSpot(){
  this.props.setDrinksChoice(this.props.deets)
  console.log("CHOOSE DRINKS" )   
}

  render () {
  	const {deets, selections} = this.props;
    
  	const cardBG =this.props.deets.photos
                                              ? this.props.deets.photos[0]
                                              : 'http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg'

    //console.log("INSIDE CARD PROPS", this.props.deets.photos[0])
      
    return (
      <div className="list-card">
      	<h2><span>{this.props.id + 1}</span> {deets.name}</h2>
      	<div className="card-photo"  style={{backgroundImage:  'url(' + cardBG + ')' }}>
          <div className="overlay">
              <p>{deets.snippet_text}</p>
          </div>
        </div>
      	<div className="card-symbols">
      		<div className="stars">Rating: {deets.rating} / 5</div>
      		<div className="price">{deets.price}</div>
      	</div>
      	<div className="addy">
      		<span>{deets.location.address1}</span>
      		<span>{deets.location.city}</span>
      		<span>{deets.location.zip_code}</span>
  
      	</div>
        <button className="btn-select" style={selections.dinnerSelected ? {display: 'none'} : {display: 'inline-block'}} 
                      onClick={ this.chooseDinnerSpot.bind(this)}>Select</button>
        <button className="btn-select" style={selections.dinnerSelected ? {display: 'inline-block'} : {display: 'none'}} 
                    onClick={ this.chooseDrinkSpot.bind(this)}>Select Bar</button>
      </div>
    )
  }
}
export default ListCard