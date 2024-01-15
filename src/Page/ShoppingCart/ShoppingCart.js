import React, { useState } from "react";
import "./ShoppingCart.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function ShoppingCart() {

  return (
    <>
      <h3 className="text-center title-shopping-cart">سبد خرید شما</h3>
      <div className="card mt-3 mb-3 shopping-cart-parent">
        <div className="items-shopping-cart-parent">
          <div className="cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>سبد خرید</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right ">
                  3 محصول
                </div>
              </div>
            </div>
            <div className="items-cart-shopping-cart-parent">
              <div className="cart-shopping-cart-parent">
                <div className="row border-top border-bottom items-cart-shopping-cart">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src="/Assets/cpu-3.png" />
                    </div>
                    <div className="col">
                      <div className="category-item-cart-shopping-cart">پردازنده</div>
                      <div className="name-product-item-cart-shopping-cart">پردازنده فلان</div>
                    </div>
                    <div className="col">
                      <span className="icon-count-shopping-cart" href="#">
                        <FaMinus/>
                      </span>
                      <span
                        className="number-count-shopping-cart"
                        href="#"
                      >
                        1
                      </span>
                      <span className="icon-count-shopping-cart" href="#">
                        <FaPlus/>
                      </span>
                    </div>
                    <div className="col">
                      320000 <AiOutlineClose className="pointer" />
                    </div>
                  </div>
                </div>
                <div className="row border-top border-bottom items-cart-shopping-cart">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src="/Assets/cpu-3.png" />
                    </div>
                    <div className="col">
                      <div className="category-item-cart-shopping-cart">پردازنده</div>
                      <div className="name-product-item-cart-shopping-cart">پردازنده فلان</div>
                    </div>
                    <div className="col">
                      <span className="icon-count-shopping-cart" href="#">
                      <FaMinus/>
                      </span>
                      <span
                        className="number-count-shopping-cart"
                        href="#"
                      >
                        1
                      </span>
                      <span className="icon-count-shopping-cart" href="#">
                      <FaPlus/>
                      </span>
                    </div>
                    <div className="col">
                      320000 <AiOutlineClose className="pointer" />
                    </div>
                  </div>
                </div>
                <div className="row border-top border-bottom items-cart-shopping-cart">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src="/Assets/mobile-2.png" />
                    </div>
                    <div className="col">
                      <div className="category-item-cart-shopping-cart">پردازنده</div>
                      <div className="name-product-item-cart-shopping-cart">پردازنده فلان</div>
                    </div>
                    <div className="col">
                      <span className="icon-count-shopping-cart" href="#">
                      <FaMinus/>
                      </span>
                      <span
                        className="number-count-shopping-cart"
                        href="#"
                      >
                        1
                      </span>
                      <span className="icon-count-shopping-cart" href="#">
                      <FaPlus/>
                      </span>
                    </div>
                    <div className="col">
                      320000 <AiOutlineClose className="pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary">
            <div>
              <h5>
                <b>خلاصه</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>
                3 محصول
              </div>
              <div className="col text-right">132000</div>
            </div>
            <form>
              <p>کد تخفیف</p>
              <input
                className="input-code-shopping-cart"
                placeholder="کد خود را وارد کنید"
              />
            </form>
            <div
              className="row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh" }}
            >
              <div className="col">جمع قیمت</div>
              <div className="col text-right">137000</div>
            </div>
            <button className="btn-checkout-shopping-cart">خرید</button>
          </div>
        </div>
        <div className="back-to-shop">
              <BsArrowRight className="icon-back-to-shop" />
              <Link className="text-muted" to="/">
                بازگشت به صفحه اصلی
              </Link>
            </div>
      </div>
    </>
  );
}
