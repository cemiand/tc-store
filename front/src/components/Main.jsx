import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import CarruselContainer from "../containers/CarruselContainer";
import NavbarContainer from "../containers/NavbarContainer";
// import RoundedImages from "./Categories";
// import Categories from "./Categories";
import FilteredProductsContainer from "../containers/FilteredProductsContainer";
import CartContainer from "../containers/CartContainer";

const Main = () => {
  return (
    <React.Fragment>
      <NavbarContainer />
      <br />
      {/* <CarruselContainer /> */}
      {/* <Categories /> */}
      <Switch>
        <Route path="/products/:id" component={SingleProductContainer} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route path="/:search" component={FilteredProductsContainer}/>
        <Route exact path="/cart" component={CartContainer} />
        <Redirect from="/" to="/products" />
      </Switch>
      {/* <Footer /> ACA IRIA EL FOOTER */}
    </React.Fragment>
  );
};

export default Main;
