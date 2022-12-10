import React from 'react'
import { FaReact, FaHtml5, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import './Tools.css'
function Tools() {
  return (
    <div className="tools-main" id="tools">
      <div > <h1 className='t-title'>My Tools</h1></div>
      <div className="tools-text">
        <h3 className="figma">Figma</h3>
        <h3 className="github" >Github</h3>
        <h3 className="html">HTML5</h3>
        <h3 className="node">Node.Js</h3>
        <h3 className="css">CSS3</h3>
        <h3 className="git">Git</h3>
        <h3 className="es">ES6</h3>
        <h3 className="react">React</h3>
        <h3 className="firebase">Firebase</h3>
        <h3 className="acs">Adobe Creative Suite</h3>
        <h3 className="shopify">Next.Js</h3>
        <h3 className="java">Java</h3>

      </div>
      <div className='tools-wrappers'>
        <FaHtml5 className='tools-icon' />
        <FaJsSquare className='tools-icon' />
        <FaReact className='tools-icon' />
        <FaNodeJs className='tools-icon' />
      </div>

    </div>

  )
}

export default Tools