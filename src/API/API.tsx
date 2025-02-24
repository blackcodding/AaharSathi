const IP_ADDRESS = '192.168.1.2';

const URL = {
  USER_URL: `http://${IP_ADDRESS}:3000/api/v1/users`,
  LIST_URL: `http://${IP_ADDRESS}:3000/api/v1/lists`,
};

export const signInUserUrl = () => {
  return `${URL.USER_URL}/login`;
};

export const signUpUserUrl = () => {
  return `${URL.USER_URL}/register`;
};

export const signOutUserUrl = () => {
  return `${URL.USER_URL}/logout`;
};

export const forgotPasswordUrl = () => {
  return `${URL.USER_URL}/forgot-password`;
};

export const refreshTokenUrl = () => {
  return `${URL.USER_URL}/refresh-token`;
};

export const resetPasswordUrl = () => {
  return `${URL.USER_URL}/reset-password`;
};

export const getUserDetailsUrl = () => {
  return `${URL.USER_URL}/user-details`;
};

export const createListUrl = () => {
  return `${URL.LIST_URL}/create-list`;
};
