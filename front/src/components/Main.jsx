import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductsContainer from "../containers/ProductsContainer"
import SingleProductContainer from '../containers/SingleProductContainer';
import LoginContainer from "../containers/LoginContainer"
import CarruselContainer from '../containers/CarruselContainer';
import NavbarContainer from '../containers/NavbarContainer';
import RoundedImages from './Categories';
import Categories from './Categories';
import '../assets/style.scss'
import FilteredProductsContainer from '../containers/FilteredProductsContainer'


const Main = () => {
    return (

        <React.Fragment>
            <NavbarContainer />
            <br />
            <CarruselContainer />
            {/* <Categories /> */}
            <Switch>
                <Route exact path="/products/:id" component={SingleProductContainer} />
                <Route exact path="/products" component={ProductsContainer} />
                <Route exact path="/products/search/:search/" component={FilteredProductsContainer} />

                {/* <Route exact path="/login" component={LoginContainer} /> */}
            </Switch>
            {/* <Footer /> ACA IRIA EL FOOTER */}
        </React.Fragment>
    )
}

export default Main;