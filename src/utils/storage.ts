import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const setUserId = (id: string) => {
  return storage.set('userId', id);
};

export const getUserId = () => {
  return storage.getString('userId');
};

export const logoutUser = () => {
  storage.delete('userId');
};
