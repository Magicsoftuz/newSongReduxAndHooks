import React from "react";
import { useSelector } from "react-redux";

const SelectMusic = () => {
  const data = useSelector((state) => state.selecting);
  return (
    <div>
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{data.name}</div>
            <div class="meta">{data.duration}</div>
            <div class="description">MagicSoft.uz</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectMusic;
