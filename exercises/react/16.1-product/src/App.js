import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { HeaderComponent } from './components/header.component';
import { HomePage } from './components/homepage.component';
import { Products } from './components/product.component';
import { ProductDetails } from './components/ProductDetail.component';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <BrowserRouter >
          <HeaderComponent/>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
