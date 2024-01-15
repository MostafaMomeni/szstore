import React, { useState } from "react";
import "./Category.css";
import Form from "react-bootstrap/Form";
import CartBox from "../../Components/CartBox/CartBox";
// import { Slider } from "@mui/material";

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function Category() {
  const [minPrice, setMinPrice] = useState(500000);
  const [maxPrice, setMaxPrice] = useState(100000000);

  const handleRangeChange = (event, type) => {
    const value = parseInt(event.target.value);

    if (type === "min" && value < maxPrice) {
      setMinPrice(value);
    } else if (type === "max" && value > minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <>
      <div className="category-parent">
        <div className="right-category">
          <div className="top-right-category"></div>
          <div className="main-right-category">
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
        <div className="left-category">
          <h4>فیلتر کردن</h4>

          <div className="price-content">
            <div>
              <label className="label-left-category">حداقل</label>
              <p id="min-value" className="p-filter-category">
                {minPrice.toLocaleString()}
              </p>
            </div>

            <div>
              <label className="label-left-category">حداکثر</label>
              <p id="max-value" className="p-filter-category">
                {maxPrice.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="range-slider">
            <input
              type="range"
              className="max-price"
              value={maxPrice}
              min="500000"
              max="100000000"
              step="500000"
              onChange={(e) => handleRangeChange(e, "max")}
            />

            <input
              type="range"
              className="min-price"
              value={minPrice}
              min="500000"
              max="100000000"
              step="500000"
              onChange={(e) => handleRangeChange(e, "min")}
            />
          </div>
          <div className="select-category-left-category mt-5">
            <Form>
              <div key={`reverse-radio`} className="mb-3">
                <Form.Check
                  reverse
                  label="همه محصولات"
                  name="group1"
                  type="radio"
                  className="radio-left-category"
                  id={`reverse-radio-1`}
                />
                <Form.Check
                  reverse
                  label="ساعت هوشمند"
                  name="group1"
                  type="radio"
                  className="radio-left-category"
                  id={`reverse-radio-1`}
                />
                <Form.Check
                  reverse
                  label="هدفون"
                  name="group1"
                  type="radio"
                  className="radio-left-category"
                  id={`reverse-radio-2`}
                />
                <Form.Check
                  reverse
                  label="موبایل"
                  name="group1"
                  type="radio"
                  className="radio-left-category"
                  id={`reverse-radio-3`}
                />
              </div>
            </Form>

            <button className="button-filter-category">ثبت نغییرات</button>
          </div>
        </div>
      </div>
    </>
  );
}
