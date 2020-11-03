import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ProductsContainer from "../containers/ProductsContainer"
// import SingleProductContainer from "../containers/SingleProductContainer"



const Main = () => {
    return ( 
        <div>
            
            <ProductsContainer />,
        </div>
        // <SingleProductContainer />,
        // <React.Fragment>
        //     <Switch>
            
        //     </Switch>
        // </React.Fragment>
    )
}
 
export default Main;