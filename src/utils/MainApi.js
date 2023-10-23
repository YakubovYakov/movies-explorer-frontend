export const BASE_URL = 'http://localhost:3000';

function resStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

function request(url, options) {
  return fetch(url, options).then(resStatus);
}

export const getUser = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = (name, email, token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, email }),
  });
};

export const getSavedMovies = (token) => {
  return request(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addSaveMovie = (data, token) => {
  return request(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteSavedMovie = (movieId, token) => {
  return request(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const checkAuth = (token) => {
  return request(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const register = (name, email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const login = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};