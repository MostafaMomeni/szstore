import React from "react";
import "./AllNewProduct.css";
import CartBox from "../../Components/CartBox/CartBox";

export default function AllNewProduct() {
  return (
    <>
      <div className="all-discount-of-the-day-parent">
        <h2 className='text-left-product-info'>جدید ها</h2>
        <div className="cart-all-discount-of-the-day-parent">
              <CartBox
                title="پردازنده فلان"
                shortName="پردازنده-فلان"
                cover="watch-3.png"
                price={9000000}
                category="پردازنده"
                off={8000000}
                numberOff={20}
              />
              <CartBox
                title="هدفون فلان"
                shortName="هدفون-فلان"
                cover="headphone-3.png"
                price={753000}
                category="هدفون"
              />
              <CartBox
                title="موبایل سامسونگ"
                shortName="موبایل-سامسونگ"
                cover="watch-1.png"
                price={1560000}
                category="موبایل"
              />
              <CartBox
                title="پردازنده اینتل"
                shortName="پردازنده-اینتل"
                cover="watch-2.png"
                price={5400000}
                category="پردازنده"
              />
              <CartBox
                title="هدفون ایسوس"
                shortName="هدفون-ایسوس"
                cover="blutooth-3.png"
                price={2000000}
                category="هدفون"
              />
              <CartBox
                title="موبایل اپل"
                shortName="موبایل-اپل"
                cover="blutooth-2.png"
                price={180000}
                category="موبایل"
              />
        </div>
      </div>
    </>
  );
}
