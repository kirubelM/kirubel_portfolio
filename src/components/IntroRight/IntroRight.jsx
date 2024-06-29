import React from 'react';
import './IntroRight.css';
import RESUME from '../../img/Kirubel_Mognehode_Resume.pdf'

const IntroRight = () => {
  return (
    <div className="ir-container">
      <div className="parent">
        <div className="content">
          <h2>const <strong>My</strong> = &#123; &#125; ;</h2>
          <h3>My.name = <strong>'Kirubel'</strong> ;</h3>
          <h3>My.title = <strong>'Frontend Engineer' </strong>;</h3>
          <h4>My.tools = <strong>[ 'HTML5', 'CSS3', 'ES6+', 'Vue', 'React.js', 'Node.js', 'Typescript', 'JavaScript, 'Python' ]</strong> ;</h4>
          <h4>My.goal = <strong>'Challenge my creativity and skills to provide dynamic and user-friendly web applications'</strong> ;</h4>
        </div>
        <a href={RESUME} download="Kirubel_Mognehode_Resume" className="resume-btn" >Get Resume</a>
      </div>
    </div>
  );
}

export default IntroRight;

