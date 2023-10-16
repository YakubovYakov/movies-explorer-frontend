import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Movies } from "../Movies/Movies.js";
import NotFound from "../NotFound/NotFound.js";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import "./App.css";
import auth from "../../utils/auth";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  let location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [locationPath, setLocationPath] = useState(location.pathname);
  const [isMenuActive, setIsMenuActive] = useState(false);

  function closeAllPopups() {
    setIsMenuActive(false);
  }

  const handleMenuPopupClick = () => setIsMenuActive(true);

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
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Menu isOpen={isMenuActive} onClose={closeAllPopups} />
    </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
