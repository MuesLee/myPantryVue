import ApplicationUser from '@/domain/applicationuser';
import jwt_decode from 'jwt-decode';

export default function decodeJwt(jwt: string): ApplicationUser | null {
  const decodedToken = jwt_decode(jwt, {}) as any;
  const appUser = decodedToken.sub as ApplicationUser;
  return appUser;
}

