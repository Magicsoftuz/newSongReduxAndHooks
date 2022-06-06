import { combineReducers, createStore } from "redux";
import { selectReducer, songReducer } from "../reducers/songReducer";

const reducers = combineReducers({
  selecting: selectReducer,
  songs: songReducer,
});

export const store = createStore(reducers);
