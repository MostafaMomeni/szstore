import React from "react";
import "./ShowCategoryBox.css";
import { Link } from "react-router-dom";

export default function ShowCategoryBox(props) {
  return (
    <>
      <div className="show-category-box-parent col-md-3 col-sm-6">
        <Link to={`/category/${props.link}`}>
          <div className="img-show-category-box-parent">
            <img
              src={`./Assets/${props.cover}`}
              className="img-show-category-box"
              alt="img-product"
            />
          </div>
          <div className="text-show-category-box">
            <h3>{props.title}</h3>
            <p>{props.count} محصول</p>
          </div>
        </Link>
      </div>
    </>
  );
}
