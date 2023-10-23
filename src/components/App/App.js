import React, { useState, useEffect } from "react";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound.js";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute.js";
import "./App.css";
import SavedMovies from "../SavedMovies/SavedMovies";
import * as mainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isErrorMessage, setIsErrorMessage] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const navigate = useNavigate();

  function closeAllPopups() {
    setIsMenuActive(false);
  }

  const handleMenuPopupClick = () => setIsMenuActive(true);

  const handleRegistration = ({ name, email, password }) => {
    setIsErrorMessage("");
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsErrorMessage("Пользователь с таким email уже существует.");
        } else if (err.status === 500) {
          setIsErrorMessage("На сервере произошла ошибка.");
        } else {
          setIsErrorMessage("При регистрации пользователя произошла ошибка.");
        }
        console.error(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsErrorMessage("");
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(res.user);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsErrorMessage("Вы ввели неправильный логин или пароль.");
        } else if (err.status === 400) {
          setIsErrorMessage(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
        } else if (err.status === 500) {
          setIsErrorMessage("На сервере произошла ошибка.");
        } else {
          setIsErrorMessage(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        }
        console.error(err);
      });
  };

  const handleUpdateProfile = ({ name, email, token }) => {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .updateUser(name, email, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsErrorMessage("Пользователь с таким email уже существует.");
        } else if (err.status === 500) {
          setIsErrorMessage("На сервере произошла ошибка.");
        } else {
          setIsErrorMessage("При обновлении профиля произошла ошибка.");
        }
        console.error(err);
      });
  };

  const handleAuth = () => {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .checkAuth(jwt)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleAuth();
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.clear();
    localStorage.navigate("/", { replace: true });
  };

  // Проверяем текущий путь и решаем, нужно ли показывать Header

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {/* <Header loggedIn={loggedIn} onMenuPopup={handleMenuPopupClick} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header className='.header__active'
                  loggedIn={loggedIn}
                  onMenuPopup={handleMenuPopupClick}
                />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <div>
                <Header
                  loggedIn={loggedIn}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute element={Movies} />
								<Footer />
              </div>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <div>
                <Header
                  loggedIn={loggedIn}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute element={SavedMovies} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <Header
                  loggedIn={loggedIn}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  element={Profile}
                  handleUpdateProfile={handleUpdateProfile}
                  handleLogout={handleLogout}
                  isErrorMessage={isErrorMessage}
                  setIsErrorMessage={setIsErrorMessage}
                />
								
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <Register
                onSubmit={handleRegistration}
                isErrorMessage={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onSubmit={handleLogin}
                isErrorMessage={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Menu isOpen={isMenuActive} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
