import React from "react";

const SelectMusic = (props) => {
  return (
    <div>
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{props.set.name}</div>
            <div class="meta">{props.set.duration}</div>
            <div class="description">MagicSoft.uz</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectMusic;
