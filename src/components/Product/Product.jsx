import React from "react";

import './Product.css'
const Product = ({ img, alt, link }) => {
  return (
    <div className="prod">
      <div className="prod-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='_blank'><img src={img} alt={alt} className="p-img" ></img></a>
    </div >
  );
}

export default Product;