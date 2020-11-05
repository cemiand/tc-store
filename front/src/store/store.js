<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
=======
import { createStore, applyMiddleware, compose } from "redux";
>>>>>>> 57187f0f6b3e1214cfd427741c62d397c5e25d7c
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunkMiddleware))
);
