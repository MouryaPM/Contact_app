import { createStore } from "redux";
import contactReducer from "../Reducers/ContactReducer";
const store = createStore(contactReducer);

export default store;
