import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import { verifyAuth } from "../auth/authActions";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  store.dispatch(verifyAuth());
  return store;
}
