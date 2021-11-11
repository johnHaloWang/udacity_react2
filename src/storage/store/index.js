import { createStore, compose } from "redux";
import reducers from "./reducers";
import middlewares from "./middlewares";

const rootState = {};
const store = createStore(reducers, rootState, compose(middlewares,

    //TODO Redux extension -- remove for PRODUCTION BUILD when vscode debugger
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
