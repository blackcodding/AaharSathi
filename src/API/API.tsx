const IP_ADDRESS = '192.168.1.2';

const URL = {
  USER_URL: `http://${IP_ADDRESS}:3000/api/v1/users`,
  LIST_URL: `http://${IP_ADDRESS}:3000/api/v1/lists`,
  CONFIG_URL: `http://${IP_ADDRESS}:3000/api/v1/configs`,
  TO_BUY_ITEM_URL: `http://${IP_ADDRESS}:3000/api/v1/toBuyItem`,
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

export const updateUserDetailsUrl = () => {
  return `${URL.USER_URL}/update-user`;
};

export const getVersionUrl = () => {
  return `${URL.CONFIG_URL}/latest-version`;
};

export const createListUrl = () => {
  return `${URL.LIST_URL}/create-list`;
};

export const getAllToBuyItemsUrl = () => {
  return `${URL.TO_BUY_ITEM_URL}/get-all-items`;
};

export const getToBuyItemByIdUrl = (id: string) => {
  return `${URL.TO_BUY_ITEM_URL}/get-item/:${id}`;
};

export const createToBuyItemUrl = () => {
  return `${URL.TO_BUY_ITEM_URL}/create-item`;
};

export const updateToBuyItemUrl = (id: string) => {
  return `${URL.TO_BUY_ITEM_URL}/update-item/:${id}`;
};

export const deleteToBuyItemUrl = (id: string) => {
  return `${URL.TO_BUY_ITEM_URL}/delete-item/:${id}`;
};
