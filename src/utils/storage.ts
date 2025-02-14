import {MMKV} from 'react-native-mmkv';
import RNSecureStorage from 'rn-secure-storage';

export const storage = new MMKV();

interface ITokensProps {
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiry: string;
}

export const setTokens = async (tokens: ITokensProps) => {
  if (!tokens) return;
  try {
    await RNSecureStorage.setItem('tokens', JSON.stringify(tokens), {});
  } catch (error) {
    console.error('Failed to set tokens:', error);
  }
};

export const getTokens = async () => {
  try {
    const tokens = await RNSecureStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    console.error('Failed to get tokens:', error);
    return {};
  }
};

export const logoutUser = async () => {
  await RNSecureStorage.clear();
};
