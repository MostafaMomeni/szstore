import React, { useState } from "react";
import "./Productnfo.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import Comments from "../Comments/Comments";
import { FcLikePlaceholder } from "react-icons/fc";

export default function Productnfo() {

  const[imgSrcTopProduct , setImgSrcTopProduct] = useState("headphone-3.png")
  const[countProduct , setCountProduct] = useState(1)


  const minesCountProduct = () =>{
    if(countProduct !== 1){
      setCountProduct(countProduct - 1)
    }
  }

  return (
    <>
      <div className="product-info-parent">
        <div className="top-product-info-parent">
          <div className="right-top-product-info-parent">
            <div className="images-right-top-product-info-parent">
              <div className="images-item-right-top-product-info-parent">
                <img src="/Assets/headphone-6.png" className="images-right-top-product-info" alt="" onClick={()=>setImgSrcTopProduct("headphone-6.png")}/>
              </div>
              <div className="images-item-right-top-product-info-parent">
                <img src="/Assets/headphone-3.png" className="images-right-top-product-info" alt="" onClick={()=>setImgSrcTopProduct("headphone-3.png")}/>
              </div>
              <div className="images-item-right-top-product-info-parent">
                <img src="/Assets/headphone-7.png" className="images-right-top-product-info" alt="" onClick={()=>setImgSrcTopProduct("headphone-7.png")} />
              </div>
            </div>
            <div className="main-image-right-top-product-info-parent">
              <img src={`/Assets/${imgSrcTopProduct}`} className="main-image-right-top-product-info" alt="" />
            </div>
          </div>
          <div className="left-product-info-parent">
            <p className="gray-text-color">هدفون</p>
            <div className="title-icon-top-product-info-parent">
            <h3 className="text-left-product-info">هدفون فلان</h3>
            <FcLikePlaceholder className="is-icon-like-top-product-info"/>
            </div>
            <span className="score-top-product-info">4.5</span>
            <br />
            <p className="gray-text-color">توضیح تستی برای این محصول</p>
            <span className="price-top-product-info">2000000</span>
            <span className="price-top-product-info-off">2000000</span>
            <br /><br />
            <p className="text-left-product-info">رنگ ها:</p>
            <div className="color-item-top-product-info-parent">
              <div className="color-top-product-info-parent">
                <span className="color-top-product-info"></span>
              </div>
              <div className="color-top-product-info-parent">
                <span className="color-top-product-info"></span>
              </div>
              <div className="color-top-product-info-parent">
                <span className="color-top-product-info"></span>
              </div>
            </div>
            <br />
            <p className="text-left-product-info">تعداد</p>
            <div className="add-count-top-product-info-parent">
              <span className="count-top-product-info-parent">
                <FaMinus className="icon-count-top-product-info" onClick={()=> minesCountProduct()}/>
                {countProduct}
                <FaPlus className="icon-count-top-product-info" onClick={()=> setCountProduct(countProduct+1)}/>
              </span>
              <button className="add-to-cart-button-top-product-info">افزودن به سبد خرید</button>
            </div>
            <button className="buy-button-top-product-info">خرید</button>
          </div>
        </div>
        
        <SimilarProducts/>

        <Comments/>
      </div>
    </>
  );
}
