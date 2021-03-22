import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


export class ProductDetails extends React.Component{
    render(){
        console.log(this.props.location.query);
      return (
        <div className="productCard">
            <img src={`${this.props.location.query.imageUrl}`} alt=""/>
            <p>{this.props.location.query.title}</p>
            <p>{`Price: ${this.props.location.query.price}`}</p>
            <p>{`Size: ${this.props.location.query.size}`}</p>
            <p>{`ID: ${this.props.location.query.id}`}</p>
            <Link to='/products'>Go Back</Link>
        </div>
      )
    }
  }


