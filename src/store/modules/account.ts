import ApplicationUser from "@/domain/applicationuser";
import LoginData from "@/domain/loginData";
import userService from "@/services/UserService";
import { decodeAccessToken } from "@/services/JwtDecoder";
import AccessToken from "@/domain/accessToken";
import { getCurrentDate } from "@/services/TimeService";

export interface AccountState {
  account: {
    accessToken: AccessToken | null;
    error: Error | null;
  };
}
export interface AccountStateData {
  error: Error | null;
  accessToken: AccessToken | null;
}

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

const accountModule = {
  state: {
    error: null,
    accessToken: readTokenFromLocalStorage()
  } as AccountStateData,
  mutations: {
    logout(state: AccountStateData) {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      state.accessToken = null;
    },
    login(state: AccountStateData, accessToken: AccessToken) {
      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken.value);
      state.accessToken = accessToken;
    },
    error(state: AccountStateData, error: Error) {
      state.error = error;
    }
  },
  actions: {
    async loginAction({ commit }: any, loginData: LoginData): Promise<void> {
      const accessToken = await userService.login(loginData);
      commit("login", accessToken);
      commit("error", null);
      return Promise.resolve();
    },
    async logoutAction({ commit }: any): Promise<void> {
      await userService.logout();
      commit("logout");
      commit("error", null);
      return Promise.resolve();
    }
  },
  getters: {
    currentUser: (state: AccountStateData) =>
      !state.accessToken ? null : state.accessToken.user,
    tokenIsValid: (state: AccountStateData) =>
      !state.accessToken
        ? false
        : state.accessToken.expiresAt > getCurrentDate()
  }
};

function readTokenFromLocalStorage(): AccessToken | null {
  const jwt = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);

  if (!jwt) return null;

  return decodeAccessToken(jwt);
}

export default accountModule;
export { ACCESS_TOKEN_STORAGE_KEY };
