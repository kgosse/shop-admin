// import Cookies from 'js-cookie'
let Cookies = {};
Cookies.set = (k, v) => localStorage.setItem(k, v);
Cookies.get = k => localStorage.getItem(k);
Cookies.remove = k => localStorage.removeItem(k);

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
