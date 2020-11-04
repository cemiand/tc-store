import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductsContainer from "../containers/ProductsContainer"
import SingleProductContainer from '../containers/SingleProductContainer';
// import SingleProductContainer from "../containers/SingleProductContainer"


const Main = () => {
    return ( 
        <React.Fragment>
            {/* <Navbar /> ACA IRIA LA NAVBAR */}
            <Switch>
                <Route exact path = "/product/:id" component = {SingleProductContainer} />
                <Route exact path = "/products" component = {ProductsContainer} />
            </Switch>
            {/* <Footer /> ACA IRIA EL FOOTER */}
        </React.Fragment>
    )
}
 
export default Main;