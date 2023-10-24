import React, { useState, useEffect } from 'react';

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies.js';
import NotFound from '../NotFound/NotFound.js';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import * as mainApi from '../../utils/MainApi';
import { BASE_URL } from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isErrorMessage, setIsErrorMessage] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [savedCards, setSavedCards] = useState([]);

  const navigate = useNavigate();

  function closeAllPopups() {
    setIsMenuActive(false);
  }

  const handleMenuPopupClick = () => setIsMenuActive(true);

  const handleRegistration = ({ name, email, password }) => {
    setIsErrorMessage('');
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsErrorMessage('Пользователь с таким email уже существует.');
        } else if (err.status === 500) {
          setIsErrorMessage('На сервере произошла ошибка.');
        } else {
          setIsErrorMessage('При регистрации пользователя произошла ошибка.');
        }
        console.error(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsErrorMessage('');
    mainApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setCurrentUser(res.user);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        if (err.status === 401) {
          setIsErrorMessage('Вы ввели неправильный логин или пароль.');
        } else if (err.status === 400) {
          setIsErrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
        } else if (err.status === 500) {
          setIsErrorMessage('На сервере произошла ошибка.');
        } else {
          setIsErrorMessage('При авторизации произошла ошибка. Переданный токен некорректен.');
        }
        console.error(err);
      });
  };

  const handleUpdateProfile = ({ name, email, token }) => {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .updateUser(name, email, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsErrorMessage('Пользователь с таким email уже существует.');
        } else if (err.status === 500) {
          setIsErrorMessage('На сервере произошла ошибка.');
        } else {
          setIsErrorMessage('При обновлении профиля произошла ошибка.');
        }
        console.error(err);
      });
  };

  const handleAuth = () => {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .checkAuth(jwt)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    handleAuth();
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.clear();
    localStorage.navigate('/', { replace: true });
  };

  const saveMovies = (movie) => {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .addSaveMovie(
        {
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `${BASE_URL}${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `${BASE_URL}${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        },
        jwt
      )
      .then((data) => {
        setSavedCards([data, ...savedCards]);
        localStorage.setItem('savedMovies', JSON.stringify([data, ...savedCards]));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteMovies = (movie) => {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .deleteSavedMovie(movie._id, jwt)
      .then(() => {
        setSavedCards((state) => state.filter((item) => item._id !== movie._id));
        localStorage.setItem('savedMovies', JSON.stringify(savedCards.filter((item) => item._id !== movie._id)));
      })
      .catch((err) => {
        console.error(err);
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
                <Header loggedIn={loggedIn} onMenuPopup={handleMenuPopupClick} />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            path="/movies"
            element={
              <div>
                <Header loggedIn={loggedIn} onMenuPopup={handleMenuPopupClick} />
                <ProtectedRoute element={Movies} savedCards={savedCards} onSave={saveMovies} onDelete={deleteMovies} />
                <Footer />
              </div>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <div>
                <Header loggedIn={loggedIn} onMenuPopup={handleMenuPopupClick} />
                <ProtectedRoute element={SavedMovies} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <Header loggedIn={loggedIn} onMenuPopup={handleMenuPopupClick} />
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
            element={<Register onSubmit={handleRegistration} isErrorMessage={isErrorMessage} setIsErrorMessage={setIsErrorMessage} />}
          />
          <Route
            path="/signin"
            element={<Login onSubmit={handleLogin} isErrorMessage={isErrorMessage} setIsErrorMessage={setIsErrorMessage} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Menu isOpen={isMenuActive} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
