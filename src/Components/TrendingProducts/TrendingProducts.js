import React from "react";
import "./TrendingProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import CartBox from "../CartBox/CartBox";

export default function TrendingProducts() {
  return (
    <>
      <div className="trending-products-parent mt-5">
        <SectionHeader text="پر فروش ها" />
        <div className="trending-products">
        <CartBox category="هدفون" shortName="هدوفن-فلان" cover="headphone-2.png" price={180000} title="هدفون فلان" off={150000} numberOff={20}/>
        <CartBox category="هدفون" shortName="هدفون-فلان-2" cover="headphone-3.png" price={200000} title="هدفون فلان 2"/>
        <CartBox category="هدفون" shortName="هدفون-فلان-3" cover="headphone-4.png" price={18000} title="هدفون فلان 3"/>
        <CartBox category="موبایل" shortName="آیپد" cover="ipad-1.png" price={150000} title="آیپد"/>
        <CartBox category="موبایل" shortName="موبایل" cover="mobile-2.png" price={350000} title="موبایل"/>
        <CartBox category="موبایل" shortName="موبایل فلان" cover="mobile-3.png" price={100000} title="موبایل فلان"/>
        <CartBox category="پردازنده" shortName="پردازنده" cover="cpu-3.png" price={250000} title="پردازنده" off={200000} numberOff={20}/>
        <CartBox category="پردازنده" shortName="پردازنده-فلان" cover="cpu-2.png" price={160000} title="پردازنده فلان"/>
        </div>
      </div>
    </>
  );
}
