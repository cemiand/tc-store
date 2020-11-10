import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/index";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunkMiddleware))
)


