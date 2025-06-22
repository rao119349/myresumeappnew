import React from "react";
import LeftNav from "./LeftNav";
import CenterNav from "./CenterNav";
import RightNav from "./RightNav";

function App() {
  return (
    <div className="main-wrapper">
      <div className="container-fluid ps-0 pe-0">
        <div className="row">
          <LeftNav />
          <CenterNav />
          <RightNav />
      </div>
      </div>
    </div>
  );
}

export default App;