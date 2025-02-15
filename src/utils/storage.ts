import {MMKV} from 'react-native-mmkv';
import RNSecureStorage from 'rn-secure-storage';

export const storage = new MMKV();

interface ITokensProps {
  accessToken: string;
  refreshToken: string;
}

export const setTokens = async (tokens: ITokensProps) => {
  if (!tokens) return;
  try {
    await RNSecureStorage.setItem('tokens', JSON.stringify(tokens), {});
  } catch (error) {
    return null;
  }
};

export const getTokens = async () => {
  try {
    const tokens = await RNSecureStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    return {};
  }
};

export const logoutUser = async () => {
  await RNSecureStorage.clear();
};
