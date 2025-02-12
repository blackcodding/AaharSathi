const IP_ADDRESS = '192.168.1.2';

export const signInUserUrl = () => {
  return `http://${IP_ADDRESS}:3000/api/v1/users/login`;
};

export const signUpUserUrl = () => {
  return `http://${IP_ADDRESS}:3000/api/v1/users/register`;
};

export const forgotPasswordUrl = () => {
  return `http://${IP_ADDRESS}:3000/api/v1/users/forgot-password`;
};

export const refreshTokenUrl = () => {
  return `http://${IP_ADDRESS}:3000/api/v1/users/refresh-token`;
};

export const resetPasswordUrl = () => {
  return `http://${IP_ADDRESS}:3000/api/v1/users/reset-password`;
};
