import React, { useState } from 'react';
import './space.css';

function Space() {
  const [moonPopupVisible, setMoonPopupVisible] = useState(false);
  const [exoSpherePopupVisible, setExoSpherePopupVisible] = useState(false);
  const [thermoSphere1PopupVisible, setThermoSphere1PopupVisible] = useState(false);
  const [thermoSphere2PopupVisible, setThermoSphere2PopupVisible] = useState(false);
  const [mesoSpherePopupVisible, setMesoSpherePopupVisible] = useState(false);
  const [stratoSpherePopupVisible, setStratoSpherePopupVisible] = useState(false);
  const [tropoSpherePopupVisible, setTropoSpherePopupVisible] = useState(false);
  const [groundLevelPopupVisible, setGroundLevelPopupVisible] = useState(false);

  const openMoonPopup = () => {
    setMoonPopupVisible(true);
  };

  const closeMoonPopup = () => {
    setMoonPopupVisible(false);
  };

  const openExoSpherePopup = () => {
    setExoSpherePopupVisible(true);
  };

  const closeExoSpherePopup = () => {
    setExoSpherePopupVisible(false);
  };

  const openThermoSphere1Popup = () => {
    setThermoSphere1PopupVisible(true);
  };

  const closeThermoSphere1Popup = () => {
    setThermoSphere1PopupVisible(false);
  };

  const openThermoSphere2Popup = () => {
    setThermoSphere2PopupVisible(true);
  };

  const closeThermoSphere2Popup = () => {
    setThermoSphere2PopupVisible(false);
  };

  const openMesoSpherePopup = () => {
    setMesoSpherePopupVisible(true);
  };

  const closeMesoSpherePopup = () => {
    setMesoSpherePopupVisible(false);
  };

  const openStratoSpherePopup = () => {
    setStratoSpherePopupVisible(true);
  };

  const closeStratoSpherePopup = () => {
    setStratoSpherePopupVisible(false);
  };

  const openTropoSpherePopup = () => {
    setTropoSpherePopupVisible(true);
  };

  const closeTropoSpherePopup = () => {
    setTropoSpherePopupVisible(false);
  };

  const openGroundLevelPopup = () => {
    setGroundLevelPopupVisible(true);
  };

  const closeGroundLevelPopup = () => {
    setGroundLevelPopupVisible(false);
  };

  return (
    <div id="space-wrapper">
      <div id="space-container">
        <div id="moon">
          <div className="info" onClick={openMoonPopup}>The Moon: Click to Learn More</div>
          <img height="444" alt='Moon img' src={require('./moon.png')}></img>
          <span style={{ "color": "white" }} className="space-distance">(384,400 km)</span>
        </div>
        <div id="exoSphere">
          <div className="info" onClick={openExoSpherePopup}>The Exosphere: Click to Learn More</div>
          <span style={{ "color": "white" }} className="space-distance">(190,000 km) </span><br></br><br></br>
          <span style={{ "color": "white" }} className="space-distance">End of Exosphere</span><br></br><br></br>
          <span style={{ "color": "white" }} className="space-distance">Around Halfway to the Moon</span>
        </div>
        <div id="thermoSphere1">
          <div className="info" onClick={openThermoSphere1Popup}>The Karman Line: Click to Learn More</div>
          <span style={{ "color": "white" }} className="space-distance">(700 km)</span>
        </div>
        <div id="thermoSphere2">
          <div className="info" onClick={openThermoSphere2Popup}>The Thermosphere: Click to Learn More</div>
        </div>
        <div id="mesoSphere">
          <div className="info" onClick={openMesoSpherePopup}>The Mesosphere: Click to Learn More</div>
          <span style={{ "color": "white" }} className="space-distance">(80 km)</span>
        </div>
        <div id="stratoSphere">
          <div className="info" onClick={openStratoSpherePopup}>The Stratosphere: Click to Learn More</div>
          <span style={{ "color": "white" }} className="space-distance">(50 km)</span>
          <img alt='fighter jet' src={require('./fighterjet.png')} height="94" style={{"marginLeft":"14%","marginTop":"20%", "padding":"4px"}}></img>
        </div>
        <div id="tropoSphere">
          <div className="info" onClick={openTropoSpherePopup}>The Troposphere: Click to Learn More</div>
          <span style={{ "color": "white" }} className="space-distance">(12 km)</span>
          <img style={{"marginLeft":"20%"}} height = "140" alt='cloud' src={require('./cloud.webp')}></img>
          <img style={{"marginLeft":"20%", "marginTop":"7%"}} height="140" alt='hot air balloon' src={require('./hotairballoon.png')}></img>
        </div>
        <div id="groundLevel">s
          <div className="info" onClick={openGroundLevelPopup}>The Ground: Click to Learn More</div>
        </div>
      </div>
      {moonPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeMoonPopup}>x</span>
            <h2>The Moon</h2>
            <p>Information about the Moon will go here...in progress</p>
          </div>
        </div>
      )}
      {exoSpherePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeExoSpherePopup}>x</span>
            <h2>The Exosphere</h2>
            <p>Information about the Exosphere will go here...in progress</p>
          </div>
        </div>
      )}
      {thermoSphere1PopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeThermoSphere1Popup}>x</span>
            <h2>The Karman Line</h2>
            <p>Information about the Karman Line will go here...in progress</p>
          </div>
        </div>
      )}
      {thermoSphere2PopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeThermoSphere2Popup}>x</span>
            <h2>The Thermosphere</h2>
            <p>Information about the Thermosphere will go here...in progress</p>
          </div>
        </div>
      )}
      {mesoSpherePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeMesoSpherePopup}>x</span>
            <h2>The Mesosphere</h2>
            <p>Information about the Mesosphere will go here...in progress</p>
          </div>
        </div>
      )}
      {stratoSpherePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeStratoSpherePopup}>x</span>
            <h2>The Stratosphere</h2>
            <p>Information about the Stratosphere will go here...in progress</p>
          </div>
        </div>
      )}
      {tropoSpherePopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeTropoSpherePopup}>x</span>
            <h2>The Troposphere</h2>
            <p>Information about the troposhere will go here...in progress</p>
          </div>
        </div>
      )}
      {groundLevelPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={closeGroundLevelPopup}>x</span>
            <h2>The Ground</h2>
            <p>Information about the Ground will go here...in progress</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Space;
