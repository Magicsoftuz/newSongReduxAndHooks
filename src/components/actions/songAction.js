import { type } from "@testing-library/user-event/dist/type";

export const SELECT = "SELECT";
export const SONGS = "SONGS";
export const selectAction = (song) => {
  return {
    type: SELECT,
    payload: song,
  };
};

export const songsAction = () => {
  return { type: SONGS };
};
