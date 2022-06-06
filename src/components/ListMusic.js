import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
const data = [
  { name: "Yomgir", duration: 10 },
  { name: "Salom", duration: 3 },
  { name: "Yoshlar", duration: 2 },
  { name: "Kechir", duration: 6 },
];

const ListMusic = (props) => {
  const [selectSong, setSelectSong] = useState({});
  const selecting = (val) => {
    setSelectSong(data[val]);
  };
  useEffect(() => {
    props.get(selectSong);
  }, [selectSong]);

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
            onClick={() => {
              selecting(ind);
            }}
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
