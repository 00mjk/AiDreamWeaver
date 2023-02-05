import authService from '../services/authService';

// store our JWT in LS and set axios headers if we do have a token
const setAuthToken = (token) => {
  if (token) {
    authService.setTokenInHeader(token);
    localStorage.setItem('token', token);
  } else {
    authService.removeTokenInHeader();
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
