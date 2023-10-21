
class Api {
	constructor() {
		this._baseUrl = 'http://localhost:3000';
		this._headers = {
			'Content-Type': 'application/json'
		}
	};

	_checkResponse = (res) => {
		if (res.ok) {
			return res.json()
		} else {
			return Promise.reject(`Ошибка: ${res.this.status}`)
		};
	}

	register(email, password, name) {
		return fetch(`${this._baseUrl}/signup`, {
			method: 'POST',
			mode: 'no-cors',
			headers: this._headers,
			body: JSON.stringify({
				password: password,
				email: email,
				name: name,
			})
		})
		.then(this._checkResponse);
	}


	login(email, password) {
		return fetch(`${this._baseUrl}/signin`, {
			method: 'POST',
			headers: this._headers,
			credentials: 'include', 
			body: JSON.stringify({
				password: password,
				email: email,
		})
	})
	.then(this._checkResponse);
}

	checkAuth() {
		return fetch(`${this._baseUrl}/users/me`, {
			credentials: 'include', 
			method: 'GET',
		})
		.then(this._checkResponse);
	}
}

export default new Api();