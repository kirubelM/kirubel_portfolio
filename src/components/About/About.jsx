import React from 'react';
import './About.css';
import AK_AWARD from '../../img/aboutme.png'
const About = () => {
  return <div className='a-main'>
    <div className="a-bg">      </div>
    <div className="about" id="about">
      <div className='about-text'>
        <h1 className="a-title">About Me</h1>
        <p className="a-subtitle">As a Frontend Engineer with a Bachelor's degree in Computer Science and Graphic Design, I bring over 3 years of experience in creating user-friendly web applications. <br></br>My expertise lies in delivering innovative solutions that enhance user experiences.
          .
        </p>
        <p className="a-subtitle-2"> I am passionate about Web3, decentralized finance, and the blockchain industry. <br></br>Feel free to reach out to collaborate or learn more about my experience and interests.
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