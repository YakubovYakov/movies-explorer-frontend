// export const BASE_URL = "https://api.domainname.yaks.nomoredomainsicu.ru";

// const checkResponce = (res) => 
// 	res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} `)

// export const register = ({email, password}) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((res) => checkResponce(res))
// };