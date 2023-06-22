import { useHistory } from "react-router"
import React from 'react'
function About() {
  const history = useHistory();
  const closePopup = () => {
    history.goBack();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">       
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
}

export default About;
