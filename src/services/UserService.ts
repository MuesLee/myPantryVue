import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import LoginData from '@/domain/loginData';
import AccessToken from '@/domain/accessToken';

const LOGIN_SUB_URL = 'login';
const REFRESH_SUB_URL = 'refresh';
const LOGOUT_SUB_URL = 'logout';

export default class UserService {
  private userApi: AxiosInstance;

  private AUTH_HEADER_PREFIX = 'Bearer ';

  constructor() {
    this.userApi = axios.create({
      baseURL: `http://localhost:8888/users`, // ${process.env.VUE_APP_USER_API_BASE_URL}
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async login(loginData: LoginData): Promise<AccessToken> {
    const response = await this.userApi.post(LOGIN_SUB_URL, loginData);
    const accessToken = this.extractAccessToken(response);

    return Promise.resolve(new AccessToken(accessToken));
  }
  public logout(): AxiosPromise {
    return this.userApi.post(LOGOUT_SUB_URL);
  }

  public async refreshAccessToken(): Promise<AccessToken> {
    const response = await this.userApi.post(REFRESH_SUB_URL);
    const accessToken = this.extractAccessToken(response);

    return Promise.resolve(new AccessToken(accessToken));
  }

  private extractAccessToken(response: AxiosResponse<any>): string {
    const authHeader = response.headers.authorization as string;
    const accessToken = authHeader.substr(this.AUTH_HEADER_PREFIX.length);
    this.userApi.defaults.headers.common.Authorization = accessToken;
    return accessToken;
  }
}



