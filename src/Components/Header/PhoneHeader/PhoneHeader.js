import React, { useState, useEffect } from "react";
import "./PhoneHeader.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function PhoneHeader(props) {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const path = window.location.pathname;

  useEffect(() => {
    setSearchValue("");
  }, [path]);

  return (
    <>
      <div
        className={`phone-header-parent ${
          props.isShow ? "show-menu-phone-header" : "close-menu-phone-header"
        }`}
      >
        <AiOutlineClose
          className="icon-close-menu-nav-bar"
          onClick={() => props.setShow(false)}
        />
        <Link to="/">
          <div className="logo-top-header-parent mt-5">
            <img
              src="./logo192.png"
              alt="logo"
              className="img-logo-phone-header"
            />
            <p className="name-top-logo-header">
              D<span className="primary">I</span>G
              <span className="primary">I</span>
            </p>
          </div>
        </Link>
        {/* <div className="search-top-header-parent">
          <input
            type="search"
            placeholder="جست و جو کنید"
            className="input-top-header"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            onKeyDown={(e) =>
              e.keyCode === 13 &&
              navigate(`/search/${searchValue == "" ? "همه" : searchValue}`)
            }
          />
          <Link to={`/search/${searchValue == "" ? "همه" : searchValue}`}>
            <BsSearch className="icon-search-top-header" />
          </Link>
        </div> */}
                <div className="search-phone-nav-bar">
                  <input
                    type="search"
                    placeholder="جست و جو کنید"
                    className="input-phone-nav-bar"
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
                    <BsSearch className="icon-search-phone-nav-bar" />
                  </Link>
                </div>
        <div>
          <ul className="ul-phone-header">
            <li className={path === "/all-discount-of-the-day" && "active-link-nav-bar"}>
              <Link to="/all-discount-of-the-day" className="li-link">
                تخفیف ها
              </Link>
            </li>
            <li className={path === "/all-new-product" && "active-link-nav-bar"}>
              <Link to="/all-new-product" className="li-link">
                جدید ها
              </Link>
            </li>
            <li className={path.includes("/category/") && "active-link-nav-bar"}>
              <Link to="/category/all" className="li-link">
                دسته بندی
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
