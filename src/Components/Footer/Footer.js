import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-parent">
        <div className="footer">
          <div className="right-footer text-left-product-info">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده
          </div>
          <div className="left-footer">
            <div>
              <ul className="ul-footer text-left-product-info">
                <li>
                  <Link to="/category/all">دسته بندی</Link>
                </li>
                <li>
                  <Link to="/all-discount-of-the-day">تخفیف ها</Link>
                </li>
                <li>
                  <Link to="/all-new-product">جدید ها</Link>
                </li>
                <li>دانلود اپلیکیشن</li>
              </ul>
            </div>
            <div>
              <img src="./logo192.png" className="icon-footer" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
