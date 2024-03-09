import './Welcome.css';
import React from "react";

function NotFound() {

    return (
      <div className="mainDiv">
        <div className="row">
          <h1>404 Not Found</h1>
          <p className='para'>{"Page not found!"}</p>
        </div>
      </div>
  );
}

export default NotFound;