import React, { useState } from "react";
import ListMusic from "./ListMusic";
import SelectMusic from "./SelectMusic";

const App = () => {
  return (
    <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
          <ListMusic />
        </div>
        <div class="middle aligned column">
          <SelectMusic />
        </div>
      </div>
      <div class="ui vertical divider">Or</div>
    </div>
  );
};

export default App;
