import React, { useState } from 'react'
import "./UserComment.css"
import { AiFillLike , AiFillDislike  } from "react-icons/ai";


export default function UserComment(props) {

    const [likeCount , setLikeCount] = useState(props.likeCount)
    const [dislikeCount , setDislikeCount] = useState(props.dislikeCount)

    const [isLikeBtn , setIsLikeBtn] = useState(true)
    const [isDislikeBtn , setIsDislikeBtn] = useState(true)
  

    const likeHandel = () =>{
        if(isLikeBtn){
            setLikeCount(likeCount+1)
            setDislikeCount(props.dislikeCount)
            setIsLikeBtn(false)
            setIsDislikeBtn(true)
          }else{
            setIsLikeBtn(true)
            setLikeCount(likeCount-1)
          }
    }

    const dislikeHandel = () =>{
        if(isDislikeBtn){
            setDislikeCount(dislikeCount+1)
            setLikeCount(props.likeCount)
            setIsDislikeBtn(false)
            setIsLikeBtn(true)
          }else{
            setIsDislikeBtn(true)
            setDislikeCount(dislikeCount-1)
          }
    }

  return (
    <div className="user-comments">
    <div className="top-user-comment">
      <div className="score-user-comment">{props.score}</div>
      <div className="date-send-user-comment">{props.sendDate}</div>
      <div className="role-user-comment">{props.role}</div>
    </div>
    <div className="body-user-comment">
      <p className="text-left-product-info text-body-user-comment">{props.body}</p>
      <div className='icon-body-user-comment'>
        <span>
          <span className="text-left-product-info ">
          {likeCount}
          </span>
          <AiFillLike className={`like-icon-body-user-comment ${!isLikeBtn && "like-icon-active"}`} onClick={()=>likeHandel()}/>
        </span>
        <span>
          <span className="text-left-product-info">
          {dislikeCount}
          </span>
          <AiFillDislike  className={`dislike-icon-body-user-comment ${!isDislikeBtn && "dislike-icon-active"}`}  onClick={()=>dislikeHandel()}/>
        </span>
      </div>
    </div>
  </div>
  )
}
