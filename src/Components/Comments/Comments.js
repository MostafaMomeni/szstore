import React from "react";
import "./Comments.css";
import UserComment from "../UserComment/UserComment";

export default function Comments() {
  return (
    <>
      <div className="comments-parent">
        <h3 className="mb-3 text-left-product-info">ارسال نظر</h3>
        <div className="send-comment-parent">
          <select className="select-score-comments text-left-product-info">
            <option value="-1" hidden selected>
              امتیاز دهید
            </option>
            <option value="1">خیلی بد</option>
            <option value="2">بد</option>
            <option value="3">متوسط</option>
            <option value="4">خوب</option>
            <option value="5">عالی</option>
          </select>
          <br />
          <textarea
            rows="5"
            className="textarea-send-comments text-left-product-info"
            placeholder="نظر خود را بنویسید"
          ></textarea>
          <br />
          <button className="button-send-comment">ثبت نظر</button>
        </div>
        <div className="user-comments-parent">
          <UserComment score={4} sendDate="1402/10/20" role="خریدار" body="نظر تستی برای این محصونظر تستی برای این محصونظر تستی برای این محصونظر تستی برای این محصونظر تستی برای این محصونظر تستی برای این محصول" likeCount={10} dislikeCount={5}/>
          <UserComment score={5} sendDate="1402/9/16" role="فروشنده" body="نظر تستی برای این محصول" likeCount={30} dislikeCount={2}/>
        </div>
      </div>
    </>
  );
}
