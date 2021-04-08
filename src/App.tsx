//libraries imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";

//local imports
import { Cookie } from "./styles";
import { writeData } from "./utils/writeData";
import client from "./api/apolloClient";

import { registerUserCookie } from "./api";
import { getCookie } from "./utils/utils";
// import { homeApp } from "./images";
import { Cookie as CookieIcon } from "./images/icons";
import "./App.css";
import {
  Home,
  Search,
  Branch,
  Product,
  Cart,
  ErrorPage,
  ErrorConnection,
  Plans,
} from "./modules";

const theme = {
  colorBackground: "#ffffff",
  backgroundAccent: "#fafbfd",
  palette: {
    primary: "#ff5f50",
    textPrimary: "#45434D",
    textSecondary: "#777782",
    textAccent: "#BEBFC5",
  },
  success: "#2DCE00",
  error: "#FF5656",
  warning: "#ffdf56",
  rtl: true,
};

const App: React.FC = () => {
  //let history = useHistory();
  writeData();
  // const [show, setShow] = useState<boolean>(true);
  const [cookiePopup, setCookiePopup] = React.useState<boolean | undefined>(
    undefined
  );

  const generateToken = (): string => {
    return Math.random().toString(36).substr(2);
  };

  useEffect(() => {
    if (getCookie("token") === "") {
      let token = generateToken() + generateToken();
      document.cookie = "token=" + token + " ;path=/";
      document.cookie = "agreeToCookies=0; path=/";
      setCookiePopup(true);
    }
  }, []);

  useEffect(() => {
    if (getCookie("agreeToCookies") === "0") {
      setCookiePopup(true);
    }
  }, []);

  const handleCookie = () => {
    document.cookie = "agreeToCookies=1; path=/";
    setCookiePopup(false);
    registerUserCookie(getCookie("token"));
  };

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <div
          className={(theme.rtl ? "rtl" : "ltr") + " App"}
          style={{ paddingTop: "30px" }}
        >
          {/* <div
            className={(!show ? "hide-pwa-helper" : "") + " screen"}
            onClick={() => setShow(false)}
          >
            <img className="screen-overlay" src={homeApp} alt="app" />
          </div> */}
          <Cookie show={cookiePopup}>
            <div className="cookie-content">
              <CookieIcon width="25" height="25" />
              <label>
                هذا الموقع يستعمل خاصية الكوكيز (Cookies) لنقدم لكم أفضل الخدمات
              </label>
            </div>
            <button onClick={() => handleCookie()}>حسناً</button>
          </Cookie>

          <Router>
            <Switch>
              <Route path={"/home"} component={() => <Home />} exact />
              <Route path={"/search"} component={() => <Search />} exact />
              <Route
                path={"/:restaurant/:branchname/:id"}
                component={() => <Product />}
                exact
              />
              <Route path={"/cart"} component={() => <Cart />} exact />
              <Route
                path={"/:restaurant/:branchname"}
                component={() => <Branch />}
                exact
              />
              <Route path={"/plans"} component={() => <Plans />} exact />
              <Route
                path={"/error"}
                component={() => <ErrorConnection />}
                exact
              />
              <Route path={"/:slug"} component={() => <Home />} exact />
              <Route component={() => <ErrorPage />} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
