import {jwtDecode} from 'jwt-decode';

export const decodeToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
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
