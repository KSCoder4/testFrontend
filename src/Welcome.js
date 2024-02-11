import './Welcome.css';
import React from "react";

function Welcome() {
    return (
      <div className="regularContainer">
        <div className="mainDiv">
          <div className="row">
            <h1>Home Page</h1>
            <p className='para'>{"This is a website that you can sign up and log in to. Once you sign up, you can use the same username and password to log in to the main page. There will be a variety of other websites once you log in with an username and password. Click the 3 lines in the top-left of the screen to navigate through pages. ~ Krithik Senthilkumar"}</p>
          </div>
        </div>
      </div>
  );
}

export default Welcome;
