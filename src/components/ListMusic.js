import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { songReducer } from "./reducers/songReducer";
import { store } from "./store/store";
import { selectAction } from "./actions/songAction";

const ListMusic = (props) => {
  const data = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const renderHTML = () => {
    return data.map((val, ind) => {
      return (
        <div className="item" id={val.name}>
          <img className="ui avatar image" src={faker.image.avatar()} />
          <div className="content">
            <div className="header"> Name of music: {val.name}</div>
            Durtion of music: {val.duration}
          </div>
          <button
            onClick={() => dispatch(selectAction(data[ind]))}
            className="ui primary basic button"
          >
            Select
          </button>
        </div>
      );
    });
  };
  return <div className="ui celled list">{renderHTML()}</div>;
};

export default ListMusic;
