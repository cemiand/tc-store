import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import CarruselContainer from "../containers/CarruselContainer";
import NavbarContainer from "../containers/NavbarContainer";
import RoundedImages from "./Categories";
import Categories from "./Categories";
import FilteredProductsContainer from "../containers/FilteredProductsContainer";
import AdminContainer from "../containers/AdminContainer"

const Main = () => {
  return (
    <React.Fragment>
      <NavbarContainer />
      <br />
    
      {/* <Categories /> */}
      <Switch>
        <Route exact path="/admin" component={AdminContainer}/>
        <Route path="/products/:id" component={SingleProductContainer} />
        <Route exact path="/products" render={() =><div><CarruselContainer/><ProductsContainer/></div>}/>
        <Route path="/:search" component={FilteredProductsContainer}/>
        <Redirect from="/" to="/products" />
      </Switch>
      {/* <Footer /> ACA IRIA EL FOOTER */}
    </React.Fragment>
  );
};

export default Main;
