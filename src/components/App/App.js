import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
// import { auth } from '../../utils/Auth';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Movies } from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound.js";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.js";
import "./App.css";
// import auth from "../../utils/auth";
import SavedMovies from "../SavedMovies/SavedMovies";
import  api  from "../../utils/MainApi";
// import * as MainApi from "../../utils/MainApi";

function App() {
  let location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState("");
  const [loginErrorMessage, setLoginErrorMessage] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [locationPath, setLocationPath] = useState(location.pathname);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [authCheckComplete, setAuthCheckComplete] = React.useState(false);

  function closeAllPopups() {
    setIsMenuActive(false);
  }

  const handleMenuPopupClick = () => setIsMenuActive(true);

	// function handleRegister({ email, name, password }) {
  //   MainApi.register({ email, name, password })
  //     .then((res) => {
	// 			console.log(res);
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function handleLogin(email, password) {
  //   MainApi.login(email, password)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.token);
  //       setLoggedIn(true);
        
  //     })
  //     .catch((err) => {
  //       console.log(`Error: ${err}`);
  //     });
  // }

  const handleRegistration = ({ name, email, password}) => {
    setRegisterErrorMessage("");
    api.register(name, email, password)
      .then(() => {
        handleLogin({email, password});
      })
      .catch((err) => {
        console.log(err);
        setRegisterErrorMessage(err);
      });
  };

  const handleLogin = ({ email, password}) => {
    setLoginErrorMessage("");
    api
      .login(email, password)
      .then(() => {
        handleAuth();
        console.log("done");
      })
      .catch((err) => {
        console.log(err);
        setLoginErrorMessage(err);
      });
  };

  const handleAuth = () => {
    api
      .checkAuth()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAuthCheckComplete(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onMenu Popup={handleMenuPopupClick} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies/*"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  headerClass={"header"}
                  onMenuPopup={handleMenuPopupClick}
                />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies/*"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  headerClass={"header"}
                  onMenuPopup={handleMenuPopupClick}
                />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  headerClass={"header"}
                  onMenuPopup={handleMenuPopupClick}
                />
                <Profile />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onSubmit={handleRegistration}
                registerErrorMessage={registerErrorMessage}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onSubmit={handleLogin}
                loginErrorMessage={loginErrorMessage}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Menu isOpen={isMenuActive} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
