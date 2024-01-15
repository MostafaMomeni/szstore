import React from "react";
import "./ForgetPassword.css";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "../../Hooks/useForm";
import Input from "../../Components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/Roules";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword() {

    const navigate = useNavigate()

  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const clickHandler = (event)=>{
    event.preventDefault()
    navigate("/login")
  }

  return (
    <>
      <div classNam="forget-password">
        <form className="form-forget-password">
          <h5 className="link-color text-center mt-3">فراموش کردن رمز عبور</h5>
          <div className="div-input-parent-register">
            <Input
              type="text"
              className="input-register"
              id="email"
              element="input"
              validation={[
                requiredValidator(),
                minValidator(8),
                maxValidator(30),
                emailValidator(),
              ]}
              onInputHandler={onInputHandler}
              placeholder="ایمیل خود را وارد کنید"
            />
            <AiOutlineMail className="icon-input-register" />
          </div>
          <button
             className={`button-register ${
                formState.isFormValid ? "" : "button-disabled"
              }`}
            disabled={!formState.isFormValid}
            onClick={(event)=>clickHandler(event)}
          >
            ارسال رمز عبور
          </button>
          <Link to="/login" className="back-link-forget-password">بازگشت</Link>
        </form>
      </div>
    </>
  );
}
