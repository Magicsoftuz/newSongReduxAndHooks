import { combineReducers, createStore } from "redux";
import { selectReducer, songReducer } from "../reducers/songReducer";

const reducers = combineReducers({
  selecting: selectReducer,
  songs: songReducer,
});

const monitorEnhacer = (storage) => (reducerEnhacer, intialState, enhancer) => {
  const monitorReducer = (state, action) => {
    const start = performance.now();
    const newReducer = (state, action);
    const end = performance.now();
    const timing = end - start;
    return newReducer;
  };
  return storage(monitorReducer, intialState, enhancer);
};

export const store = createStore(reducers, {}, monitorEnhacer);
