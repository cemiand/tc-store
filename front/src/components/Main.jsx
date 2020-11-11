import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import CarruselContainer from "../containers/CarruselContainer";
import NavbarContainer from "../containers/NavbarContainer";
import CategoriesContainer from "../containers/CategoriesContainer";
import FilteredProductsContainer from "../containers/FilteredProductsContainer";
import AdminContainer from "../containers/AdminContainer";
import CartContainer from "../containers/CartContainer";

const Main = () => {
  return (
    <React.Fragment>
      <NavbarContainer />
      <br />
      <Switch>
        <Route exact path="/admin" component={AdminContainer} />
        <Route
          exact
          path="/products"
          render={() => (
            <div>
              <CarruselContainer />
              <ProductsContainer />
            </div>
          )}
        />
        <Route exact path="/cart" component={CartContainer} />
        <Route path="/products/:id" component={SingleProductContainer} />
        <Route path="/categories"
          render={() => (
            <div>
              <CarruselContainer />
              <CategoriesContainer />
            </div>
          )} />
        <Route path="/:search" component={FilteredProductsContainer} />
        <Redirect from="/" to="/products" />
      </Switch>
      {/* <Footer /> ACA IRIA EL FOOTER */}
    </React.Fragment>
  );
};

export default Main;
