import { React, useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Socials.css'
import { ThemeContext } from '../../context';

const Socials = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let mode;
  if (darkMode) {
    mode = "light";
  } else {
    mode = "dark"
  }
  return (
    <div className={'container'}>
      <a href="mailto:zewdukirubel7@gmail.com"><FaEnvelope className='icon' /></a>
      <a href="https://www.linkedin.com/in/kirubel-m/" target="_blank"><FaLinkedin className='icon' /></a>
      <a href="https://github.com/kirubelM" target="_blank"><FaGithub className='icon' /></a>
    </div >
  );
}

export default Socials;