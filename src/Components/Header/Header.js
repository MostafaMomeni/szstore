import React, { useEffect, useMemo, useState } from "react";
import "./Header.css";
import { BsSearch, BsBag, BsFillMoonStarsFill } from "react-icons/bs";
import { FaUserAlt, FaSun } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "react-bootstrap";
import PhoneHeader from "./PhoneHeader/PhoneHeader";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [localThem, setLocalThem] = useState(localStorage.getItem("them"));

  const [localThemLoad, setLocalThemLoad] = useState(
    localStorage.getItem("them")
  );
  const path = window.location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    setIsShowMenu(false);
    setSearchValue("");
    setSearchValue("")
  }, [path]);

  const reSize = () => {
    setWidth(window.innerWidth);
  };

  useMemo(() => {
    window.addEventListener("resize", reSize);
  }, []);

  useEffect(() => {
    setLocalThemLoad(localStorage.getItem("them"));
    if (localThemLoad === null) {
      setLocalThem("light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("them", localThem);
    if (localThem === "dark") {
      // document.documentElement.style.setProperty('--bg-body1', 'rgba(106,87,87,1)');
      // document.documentElement.style.setProperty('--bg-body2', 'rgba(41,44,53,1)');
      // document.documentElement.style.setProperty('--bg-card1', 'rgba(73 , 168 , 255 , 1)');
      // document.documentElement.style.setProperty('--bg-card2', 'rgba(8,18,44,1)');
      document.documentElement.style.setProperty('--bg-body1', '#0F0F0F');
      document.documentElement.style.setProperty('--bg-body2', '#232D3F');
      document.documentElement.style.setProperty('--bg-card1', '#092635');
      document.documentElement.style.setProperty('--bg-card2', '#5C8374');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--against-text-color', 'black');
      document.documentElement.style.setProperty('--bg-gray', '#1B4242');
    }else{
      // document.documentElement.style.setProperty('--bg-body1', 'rgba(203,203,203,1)');
      // document.documentElement.style.setProperty('--bg-body2', 'rgba(245,245,245,1)');
      // document.documentElement.style.setProperty('--bg-card1', 'rgba(125,130,136,1)');
      // document.documentElement.style.setProperty('--bg-card2', 'rgba(115,172,200,1)');
      document.documentElement.style.setProperty('--bg-body1', 'rgb(223, 250, 198)');
      document.documentElement.style.setProperty('--bg-body2', 'white');
      document.documentElement.style.setProperty('--bg-card1', '#00ADB5');
      document.documentElement.style.setProperty('--bg-card2', '#EEEEEE');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty('--against-text-color', '#fff');
      document.documentElement.style.setProperty('--bg-gray', '#9EC8B9');
    }
  }, [localThem]);
  
  return (
    <>
      <div className="header">
        <Container>
          <div className="top-header">
            {width > 991 && (
              <>
                <Link to="/">
                  <div className="logo-top-header-parent">
                    <img
                      src="./logo192.png"
                      alt="logo"
                      className="img-top-logo-header"
                    />
                    <p className="name-top-logo-header">
                      D<span className="primary">I</span>G
                      <span className="primary">I</span>
                    </p>
                  </div>
                </Link>
                <div className="search-top-header-parent">
                <div className="search-top-header">
                  <input
                    type="search"
                    placeholder="جست و جو کنید"
                    className="input-top-header"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) =>
                      e.keyCode === 13 &&
                      navigate(
                        `/search/${searchValue == "" ? "همه" : searchValue}`
                      )
                    }
                  />
                  <Link
                    to={`/search/${searchValue == "" ? "همه" : searchValue}`}
                  >
                    <BsSearch className="icon-search-top-header" />
                  </Link>
                </div>
                </div>
              </>
            )}
            <div className="my-4">
              <Link to="/login" style={{ color: "black" }}>
                <span className="icon-login-top-header-parent">
                  <FaUserAlt className="font-icons" />
                </span>
                <span className="text-login-top-header">
                ورود / ثبت نام
                </span>
              </Link>
            </div>
            <div className="bag-like-top-header-parent">
              <div className="bag-like-top-header ms-3">
                <Link to="/likes">
                  <svg
                    className="pointer"
                    _ngcontent-ng-c3631614527=""
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      _ngcontent-ng-c3631614527=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      _ngcontent-ng-c3631614527=""
                      d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span className="count-like-bag-top-header">1</span>
                </Link>
              </div>
              <Link to="shopping-cart" className="bag-like-top-header">
                <BsBag className="font-icons me-3 pointer" />
                <span className="count-like-bag-top-header">1</span>
              </Link>
            </div>
          </div>
        </Container>
        <hr />
        <Container>
          <div className="bottom-header">
            {width > 991 ? (
              <div>
                <ul className="ul-nav-bar">
                  <li className={path === "/all-discount-of-the-day" && "active-link-nav-bar"}>
                    <Link to="/all-discount-of-the-day" className={`li-link`}>
                      تخفیف ها
                    </Link>
                  </li>
                  <li className={path === "/all-new-product" && "active-link-nav-bar"}>
                    <Link to="/all-new-product" className={`li-link`}>
                      جدید ها
                    </Link>
                  </li>
                  <li className={path.includes("/category/") && "active-link-nav-bar"}>
                    <Link to="/category/all" className={`li-link`}>
                      دسته بندی
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <AiOutlineMenu
                  className="show-menu-header text-left-product-info"
                  onClick={() => setIsShowMenu(true)}
                />
                <PhoneHeader isShow={isShowMenu} setShow={setIsShowMenu} />
                {isShowMenu && (
                  <div
                    className="close-map-header"
                    onClick={() => setIsShowMenu(false)}
                  ></div>
                )}
              </>
            )}
            <div>
              <input
                type="checkbox"
                class="checkbox"
                id="checkbox"
                onChange={() =>
                  localThem === "dark"
                    ? setLocalThem("light")
                    : setLocalThem("dark")
                }
              />
              <label for="checkbox" class="checkbox-label">
                {localThemLoad === "dark" ? (
                  <>
                    <FaSun className="sun-icon-dark-light-mode" />
                    <BsFillMoonStarsFill className="moon-icon-dark-light-mode" />
                  </>
                ) : (
                  <>
                    <BsFillMoonStarsFill className="moon-icon-dark-light-mode" />
                    <FaSun className="sun-icon-dark-light-mode" />
                  </>
                )}
                <span class="ball"></span>
              </label>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
