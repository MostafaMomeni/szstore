import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import AuthContext from "./Context/AuthContext";


function App() {
  let routes = useRoutes(Routes);

  const [scroll, setScroll] = useState(document.documentElement.scrollTop);
  const [isShowBtnGoToUp, setIsShowBtnGoToUp] = useState(false);

  useEffect(() => {
    if (scroll > 100) {
      setIsShowBtnGoToUp(true);
    } else {
      setIsShowBtnGoToUp(false);
    }
  }, [scroll]);

  const eventScroll = () => {
    setScroll(document.documentElement.scrollTop);
  };

  useMemo(() => {
    document.addEventListener("scroll", eventScroll);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{
        api:"https://devhelper.ir"
      }}>
        <Header />
        {routes}
        <div
          className={`go-to-up-button ${
            isShowBtnGoToUp ? "show-go-to-up-button" : ""
          }`}
          onClick={() => (document.documentElement.scrollTop = 0)}
        >
          <FaArrowUp className="icon-go-to-up-button" />
        </div>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
