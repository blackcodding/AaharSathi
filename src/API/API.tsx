const IP_ADDRESS = '192.168.1.2';

const USER_URL = `http://${IP_ADDRESS}:3000/api/v1/users`;

export const signInUserUrl = () => {
  return `${USER_URL}/login`;
};

export const signUpUserUrl = () => {
  return `${USER_URL}/register`;
};

export const signOutUserUrl = () => {
  return `${USER_URL}/logout`;
};

export const forgotPasswordUrl = () => {
  return `${USER_URL}/forgot-password`;
};

export const refreshTokenUrl = () => {
  return `${USER_URL}/refresh-token`;
};

export const resetPasswordUrl = () => {
  return `${USER_URL}/reset-password`;
};

export const getUserDetailsUrl = () => {
  return `${USER_URL}/user-details`;
};
