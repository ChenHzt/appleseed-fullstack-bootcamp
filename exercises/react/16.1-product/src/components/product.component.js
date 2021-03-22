import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import React from 'react';
import {data} from '../store'

export class Products extends React.Component{

    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        this.setState({products:data})
    }

    render(){
      return (
        <div className="productsList">
            Product Page
            {this.state.products.map((product,index) => <Link key={product.title} to={{pathname: `product/${index}`, query: product}} >{product.title}</Link>)}
        </div>
      )
    }
  }


