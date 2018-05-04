import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "@Reducers";

const configureStore = (preloadedState) => {

    preloadedState = {};

    const store = createStore(
        rootReducer,
        preloadedState, 
        applyMiddleware(thunk)
    )

    /*store.subscribe(() => {
        saveState(store.getState());
    });*/

    return store;
}

export default configureStore