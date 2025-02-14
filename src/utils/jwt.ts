import {jwtDecode} from 'jwt-decode';

export const decodeToken = (token: string) => {
  console.log('🚀 ~ isTokenValid ~ decodedToken:', token, typeof token);
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
};

export const isTokenValid = (decodedToken: any) => {
  if (!decodedToken) return false;

  const {exp} = decodedToken;
  if (!exp) return false;

  const currentTime = Math.floor(Date.now() / 1000);
  return exp > currentTime;
};
