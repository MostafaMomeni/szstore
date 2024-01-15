import React from "react";
import "./Likes.css";
import { AiOutlineClose} from "react-icons/ai";
import {BsArrowRight} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Likes() {
  return (
    <>
      <div className=" cart-likes">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>محصولات پسند شده</b>
                  </h4>
                </div>
                <div className="col align-self-center text-center">
                  3 محصول
                </div>
              </div>
            </div>
            <div className="cart-shopping-cart-parent">
            <div className="items-cart-shopping-cart-parent">
            <div className="row border-top border-bottom items-cart-Likes-cart">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid "
                    src="/Assets/cpu-2.png"
                  />
                </div>
                <div className="col">
                  <div className="row category-item-cart-shopping-cart">پردازنده</div>
                  <div className="row">پردازنده فلان</div>
                </div>
                <div className="col">
                  <button className="button-likes">افزودن به سبد خرید</button>
                </div>
                <div className="col">
                 320000 <AiOutlineClose className="pointer"/>
                </div>
              </div>
            </div>
              </div>
            <div className="items-cart-shopping-cart-parent">
            <div className="row border-top border-bottom items-cart-Likes-cart">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid "
                    src="/Assets/cpu-2.png"
                  />
                </div>
                <div className="col">
                  <div className="row category-item-cart-shopping-cart">پردازنده</div>
                  <div className="row">پردازنده فلان</div>
                </div>
                <div className="col">
                  <button className="button-likes">افزودن به سبد خرید</button>
                </div>
                <div className="col">
                 320000 <AiOutlineClose className="pointer"/>
                </div>
              </div>
            </div>
              </div>
            <div className="items-cart-shopping-cart-parent">
            <div className="row border-top border-bottom items-cart-Likes-cart">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid "
                    src="/Assets/cpu-2.png"
                  />
                </div>
                <div className="col">
                  <div className="row category-item-cart-shopping-cart">پردازنده</div>
                  <div className="row">پردازنده فلان</div>
                </div>
                <div className="col">
                  <button className="button-likes">افزودن به سبد خرید</button>
                </div>
                <div className="col">
                 320000 <AiOutlineClose className="pointer"/>
                </div>
              </div>
            </div>
              </div>
            </div>
            
            <div className="back-to-shop">
              <BsArrowRight className="icon-back-to-shop"/>
              <Link to="/" className="">بازگشت به صفحه اصلی</Link>
            </div>
          </div>
    </>
  );
}
