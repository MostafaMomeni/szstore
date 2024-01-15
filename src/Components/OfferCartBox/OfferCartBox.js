import React, { useState, useMemo } from "react";
import "./OfferCartBox.css";
import { Link } from "react-router-dom";

export default function OfferCartBox(props) {
  const [remaining, setRemaining] = useState("0");

  const [splitRemaning, setSplitRemaning] = useState([0, 0, 0, 0]);
  const [difference, setDifference] = useState(+new Date(props.currentDate) - +new Date());
  

  setInterval(()=>{
    setDifference(+new Date(props.currentDate) - +new Date())
  },1000)

  const timerInterval = useMemo(() => {
      if (difference > 0) {
        const parts = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),

          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

          minutes: Math.floor((difference / 1000 / 60) % 60),

          seconds: Math.floor((difference / 1000) % 60),
        };

        setRemaining(
          Object.keys(parts)
            .map((part) => {
              return `${parts[part]} ,`;
            })
            .join(" ")
        );
      }
      setSplitRemaning(remaining.split(","));
    }, [difference]);

  return (
    <>
      <div className={`offer-cart-box-parent ${props.swiper && "swiper-mode-offer-cart-box"}`}>
        <Link to={`/product-info/${props.shortName}`} className="link-color">
        <div className="top-offer-cart-box-parent">
          <img
            src={`./Assets/${props.cover}`}
            className="img-offer-cart-box"
            alt={props.title}
          />
        </div>
        <div className="bottom-offer-cart-box-parent">
          <p className="category-offer-cart-box">{props.category}</p>
          <h4 className="title-bottom-offer-cart-box" >{props.title}</h4>
          <div className="price-offer-cart-box-parent">
          {props.off && (
            <span className="price-offer-cart-box me-3">
              {props.off.toLocaleString()}
            </span>
          )}
          <span
            className={`price-offer-cart-box ${
              props.off ? "off-price-cart-box" : ""
            }`}
          >
            {props.price.toLocaleString()}
          </span>
          </div>
          <div className="date-offer-cart-box-parent">
            <span className="date-offer-cart-box">
              {splitRemaning[0]} <br /> روز
            </span>
            <span className="date-offer-cart-box">
              {splitRemaning[1]} <br /> ساعت
            </span>
            <span className="date-offer-cart-box">
              {splitRemaning[2]} <br />
              دقیقه
            </span>
            <span className="date-offer-cart-box">
              {splitRemaning[3]} <br /> ثانیه
            </span>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}
