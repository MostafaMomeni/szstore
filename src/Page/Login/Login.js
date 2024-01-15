import React, { useContext, useState } from "react";
import "./Login.css";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "../../Hooks/useForm";
import Input from "../../Components/Form/Input";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Validators/Roules";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";

export default function Login() {
  const navigate = useNavigate();
  const routeApi = useContext(AuthContext);

  const [isRegisterFocus, setIsRegisterFocus] = useState(false);
  const [isShowSpinnerRegister, setIsShowSpinnerRegister] = useState(false);
  const [isShowSpinnerLogin, setIsShowSpinnerLogin] = useState(false);

  const [formStateRegister, onInputHandlerRegister] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [formStateLogin, onInputHandlerLogin] = useForm(
    {
      userName: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerHandler = (e) => {
    e.preventDefault();
    setIsShowSpinnerRegister(true)
    fetch(`${routeApi.api}/api/Account/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      body:JSON.stringify({
        userName: formStateRegister.inputs.userName.value,
        email: formStateRegister.inputs.email.value,
        password: formStateRegister.inputs.password.value,
      }),
    })
      .then((res) => {
        if(res.status === 200){   
          navigate("/verify-email")
        }
        setIsShowSpinnerRegister(false)      
      })
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setIsShowSpinnerLogin(true)
    fetch(`${routeApi.api}/api/Account/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include",
      body:JSON.stringify({
        userName: formStateLogin.inputs.userName.value,
        password: formStateLogin.inputs.password.value,
      }),
    })
      .then((res) => {
        if(res.status === 200){
          Swal.fire({
            title:"شما با موفقیت وارد اکانت خود شدید",
            icon:"success",
            confirmButtonText:"بستن"
          }).then(res =>{
            if(res.isConfirmed){
              // navigate("/")
            }
          })
        }
        setIsShowSpinnerLogin(false)
      })
  };

  return (
    <>
      <div class="main-register my-5">
        <input
          className="input-register"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div class="signup">
          <form>
            <label
              for="chk"
              aria-hidden="true"
              className="label-register"
              onClick={() => setIsRegisterFocus(!isRegisterFocus)}
            >
              ثبت نام
            </label>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="userName"
                element="input"
                disabled={isRegisterFocus}
                validation={[
                  requiredValidator(),
                  minValidator(5),
                  maxValidator(15),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="نام کاربری خود را وارد کنید"
              />
              <AiOutlineUser className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="email"
                element="input"
                disabled={isRegisterFocus}
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(30),
                  // emailValidator(),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="ایمیل خود را وارد کنید"
              />
              <AiOutlineMail className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="password"
                disabled={isRegisterFocus}
                element="input"
                validation={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandlerRegister}
                placeholder="رمز عبور خود را وارد کنید"
              />

              <RiLockPasswordLine className="icon-input-register" />
            </div>

            <button
              onClick={(e) => registerHandler(e)}
              className={`button-register ${
                formStateRegister.isFormValid && !isShowSpinnerRegister ? "" : "button-disabled"
              }`}
              disabled={!formStateRegister.isFormValid && isShowSpinnerRegister}
            >
              {isShowSpinnerRegister ? (
                <Spinner/>
              ) : (
                <>
                ثبت نام
                </>
                )}
            </button>
          </form>
        </div>

        <div class="login">
          <form>
            <label
              for="chk"
              aria-hidden="true"
              className="label-register"
              onClick={() => setIsRegisterFocus(!isRegisterFocus)}
            >
              ورود
            </label>
            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="userName"
                element="input"
                disabled={!isRegisterFocus}
                validation={[
                  requiredValidator(),
                  minValidator(5),
                  maxValidator(30),
                ]}
                onInputHandler={onInputHandlerLogin}
                placeholder="نام کاربری خود را وارد کنید"
              />
              <AiOutlineUser className="icon-input-register" />
            </div>

            <div className="div-input-parent-register">
              <Input
                type="text"
                className="input-register"
                id="password"
                element="input"
                disabled={!isRegisterFocus}
                validation={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandlerLogin}
                placeholder="رمز عبور خود را وارد کنید"
              />
              <RiLockPasswordLine className="icon-input-register" />
            </div>
            <button
              className={`button-register ${
                formStateLogin.isFormValid && !isShowSpinnerLogin ? "" : "button-disabled"
              }`}
              disabled={
                !formStateLogin.isFormValid && isShowSpinnerLogin
              }
                onClick={(e) => loginHandler(e)}
            >
               {isShowSpinnerLogin ? (
                <Spinner/>
              ) : (
                <>
                ورود
                </>
                )}
            </button>
            {isRegisterFocus && (
              <Link to="/forget-password" className="forget-password-login">
                فراموش کردن رمز عبور
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
