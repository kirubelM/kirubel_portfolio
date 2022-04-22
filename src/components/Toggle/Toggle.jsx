import './Toggle.css';
import React, { useContext } from "react";
import Sun from '../../img/sun2.png';
import Moon from '../../img/moon2.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }
  return (
    <div className="toggle" onClick={handleClick} >
      {/* <div className="dark-icon"></div>
      <div className="light-icon"></div> */}

      <img src={Moon} alt="Light mode sun icon" className="t-icon" />
      <img src={Sun} alt="Dark mode moon icon" className="t-icon" />
      <div className="t-button" style={{ left: theme.state.darkMode ? 0 : 25 }}>
      </div>
    </div>
  );

}

export default Toggle;