import React from 'react';
import './About.css';
import AK_AWARD from '../../img/aboutme.png'
const About = () => {
  return <div className='a-main'>
    <div className="a-bg">      </div>
    <div className="about" id="about">
      <div className='about-text'>
        <h1 className="a-title">About Me</h1>
        <p className="a-subtitle">As a Fullstack Engineer with a Bachelor's in Computer Science and Graphic Design and experience creating web applications, I am dedicated to delivering innovative and user-friendly solutions.
        </p>
        <p className="a-subtitle-2"> I am passionate about Web3, decentralized finance, and the blockchain industry. Feel free to reach out to x  connect and discuss potential opportunities or learn more about my experience and interests.
        </p>
        <div className="award">
          <img src={AK_AWARD} alt="" className="ak-image" />
          <p className='award-info'><strong>Al-Khwarizmi - </strong>Computer Science Honor Society </p>
        </div>
      </div>
    </div>
  </div>;
}


export default About;