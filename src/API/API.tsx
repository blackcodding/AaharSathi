export const signInUserUrl = () => {
  return `http://192.168.1.7:3000/api/v1/users/login`;
};

export const signUpUserUrl = () => {
  return `http://192.168.1.7:3000/api/v1/users/register`;
};

export const forgotPasswordUrl = () => {
  return `http://192.168.1.7:3000/api/v1/users/forgot-password`;
};

export const refreshTokenUrl = () => {
  return `http://192.168.1.7:3000/api/v1/users/refresh-token`;
};

export const resetPasswordUrl = () => {
  return `http://192.168.1.7:3000/api/v1/users/reset-password`;
};
