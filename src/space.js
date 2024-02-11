import React, { useEffect, useState } from 'react';
import './space.css';
function Space() {
  const [currentDistance, setCurrentDistance] = useState(0);

  useEffect(() => {
		 const scrollContainer = document.documentElement || document.body;
		
    const handleScroll = () => {
	setCurrentDistance(Math.floor((scrollContainer.scrollHeight - scrollContainer.scrollTop) / 100));	
    };

    window.addEventListener('scroll', handleScroll);

		setTimeout(function() {
			const doc = document.documentElement || document.body;
			doc.scrollTop = doc.scrollHeight;
		}, 100);
		
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div id="space-wrapper">
      <div id="side-box">
        <h2 style={{ "color": "white" }}>Current Distance</h2>
        <span style={{ "color": "white" }}>{currentDistance * 100} km</span>
      </div>
      <div id="space-container">
        <div id="moon">
          <h2 style={{ "color": "white" }} className="top">The Moon</h2>
          <img height = "444" alt='Moon img' src={require('./moon.png')} ></img>
          <span style={{ "color": "white" }} className="space-distance">(384,400 km)</span>
          <div className="info">Oh no... too far away from the eggs... losing.. consciousness...</div>
        </div>
        <div id="exoSphere">
          <h2 style={{ "color": "white" }} className="bottom">The Exosphere</h2>
          <span style={{ "color": "white" }} className="space-distance">(190,000 km) </span><br></br><br></br>
          <span style={{ "color": "white" }} className="space-distance">End of Exosphere</span><br></br><br></br>
          <span style={{ "color": "white" }} className="space-distance">Around Halfway to the Moon</span>
        </div>
        <div id="thermoSphere1">
          <span style={{ "color": "white" }} className="space-distance">(700 km)</span>
          <h5 style={{"color":"white"}} className='bottom'>(Border between Space and Earth)</h5>
          <h2 style={{ "color": "white" }} className="bottom">Karman Line </h2>
        </div>
        <div id="thermoSphere2">
          <h2 style={{ "color": "white" }} className="bottom">The Thermosphere</h2>
        </div>
        <div id="mesoSphere">
          <h2 style={{ "color": "white" }} className="bottom"> The Mesosphere</h2>
          <span style={{ "color": "white" }} className="space-distance">(80 km)</span>
        </div>
        <div id="stratoSphere">
          <h2 style={{ "color": "white" }} className="bottom">The Stratosphere</h2>
          <span style={{ "color": "white" }} className="space-distance">(50 km)</span>
          <img alt='fighter jet' src={require('./fighterjet.png')} height="94" style={{"marginLeft":"14%","marginTop":"30%"}}></img>
        </div>
        <div id="tropoSphere">
          <h2 className="bottom">The Troposphere</h2>
          <span style={{ "color": "white" }} className="space-distance">(12 km)</span>
          <img style={{"marginLeft":"20%"}} height = "140" alt='cloud' src={require('./cloud.webp')}></img>
          <img style={{"marginLeft":"20%", "marginTop":"7%"}} height="200" alt='hot air balloon' src={require('./hotairballoon.png')}></img>
        </div>
        <div id="groundLevel">
          <h2 className="bottom">The Ground</h2>
          <span className="space-distance"> (0 km)</span>
          <div className="info">I think somebody may live on this layer. Just maybe</div>
        </div>
      </div>
    </div>
  );
}

export default Space;
