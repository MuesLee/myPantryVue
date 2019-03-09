import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";
import LoginData from "@/domain/loginData";
import AccessToken from "@/domain/accessToken";
import { decodeAccessToken } from "@/services/JwtDecoder";
import store from "@/store";
import { AccountState } from "@/store/modules/account";

const LOGIN_SUB_URL = "login";
const REFRESH_SUB_URL = "refresh";
const LOGOUT_SUB_URL = "logout";

class UserService {
  private userApi: AxiosInstance;

  private AUTH_HEADER_PREFIX = "Bearer ";

  constructor() {
    this.userApi = axios.create({
      baseURL: `http://localhost:8888/users`, // ${process.env.VUE_APP_USER_API_BASE_URL}
      timeout: 5000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public async login(loginData: LoginData): Promise<AccessToken> {
    const response = await this.userApi.post(LOGIN_SUB_URL, loginData);
    const accessTokenString = this.extractAccessToken(response);

    const decodedAccessToken = decodeAccessToken(accessTokenString);

    return !!decodedAccessToken
      ? Promise.resolve(decodedAccessToken)
      : Promise.reject(null);
  }
  public logout(): Promise<AxiosResponse> {
    return this.userApi.post(LOGOUT_SUB_URL);
  }

  public async refreshAccessToken(): Promise<AccessToken> {
    const response = await this.userApi.post(REFRESH_SUB_URL);
    const accessTokenString = this.extractAccessToken(response);

    const decodedAccessToken = decodeAccessToken(accessTokenString);

    return !!decodedAccessToken
      ? Promise.resolve(decodedAccessToken)
      : Promise.reject(null);
  }

  private extractAccessToken(response: AxiosResponse<any>): string {
    const authHeader = response.headers.authorization as string;
    const accessToken = authHeader.substr(this.AUTH_HEADER_PREFIX.length);
    this.userApi.defaults.headers.common.Authorization = accessToken;
    return accessToken;
  }

  private getAuthHeader(): any {
    return {
      headers: {
        Authorization:
          this.AUTH_HEADER_PREFIX +
          ((store.state as AccountState).account.accessToken as AccessToken)
            .value
      }
    };
  }
}
const userService = new UserService();

export default userService;
