import React from "react";
import "./CartBox.css";
import { Link } from "react-router-dom";

export default function CartBox(props) {
  
  return (
    <>
      <div className={`cart-box-parent ${props.swiper && "swiper-mode-cart-box"}`} >
        <Link to={`/product-info/${props.shortName}`} className="link-color">
        <div className="top-cart-box-parent">
          <img
            src={`/Assets/${props.cover}`}
            className="img-cart-box"
            alt={props.title}
          />
        </div>
        <div className="bottom-cart-box-parent">
          <p className="category-cart-box ">{props.category}</p>
          <h5 className="title-bottom-cart-box">{props.title}</h5>
          <br />
          {props.off && (
            <span className="price-cart-box me-3">{props.off.toLocaleString()}</span>
          )}
          <span
            className={`price-cart-box ${
              props.off ? "off-price-cart-box" : ""
            }`}
          >
            {props.price.toLocaleString()}
          </span>
        </div>
        {props.numberOff && (
        <div className="off-box-cart-box-parent">
          {props.numberOff}%
        </div>
        )}
        </Link>
      </div>
    </>
  );
}
