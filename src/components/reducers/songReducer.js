import { SELECT, SONGS } from "../actions/songAction";

const songs = [
  { name: "Yomgir", duration: 10 },
  { name: "Salom", duration: 3 },
  { name: "Yoshlar", duration: 2 },
  { name: "Kechir", duration: 6 },
];

export const selectReducer = (state = {}, action) => {
  if (action.type === SELECT) {
    console.log(action);
    return action.payload;
  }
  return state;
};
export const songReducer = (state = songs, action) => {
  if (action.type === SONGS) {
    return state;
  }
  return state;
};
