import ApplicationUser from "@/domain/applicationuser";
import jwt_decode from "jwt-decode";
import AccessToken from "@/domain/accessToken";

export function decodeAppUser(jwt: string): ApplicationUser | null {
  const decodedToken = jwt_decode(jwt, {}) as any;
  const appUser = decodedToken.sub as ApplicationUser;
  return appUser;
}

export function decodeExpiration(jwt: string | null): Date | null {
  if (!jwt) {
    return null;
  }

  const decodedToken = jwt_decode(jwt, {}) as any;
  const expirationDate = decodedToken.exp as Date;
  return expirationDate;
}

export function decodeAccessToken(jwt: string): AccessToken | null {
  const decodedToken = jwt_decode(jwt, {}) as any;

  if (!decodedToken) return null;

  const appUser = decodedToken.sub as ApplicationUser;
  const expirationDate = decodedToken.exp as number;

  if (!appUser || !expirationDate) return null;

  return new AccessToken(jwt, appUser, new Date(expirationDate * 1000));
}
