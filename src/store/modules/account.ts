import ApplicationUser from "@/domain/applicationuser";
import LoginData from "@/domain/loginData";
import userService from "@/services/UserService";
import decodeJwt from "@/services/JwtDecoder";
import AccessToken from "@/domain/accessToken";
import { ACCESS_TOKEN_STORAGE_KEY } from "@/services/AuthService";

export interface AccountState {
  account: {
    currentUser: ApplicationUser | null;
    error: Error | null;
  };
}
export interface AccountStateData {
  currentUser: ApplicationUser | null;
  error: Error | null;
}


const accountModule = {
  state: { currentUser: null, error: null },
  mutations: {
    logout(state: AccountStateData) {
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
      state.currentUser = null;
    },
    login(state: AccountStateData, accessToken: AccessToken) {
      const appUser = decodeJwt(accessToken.value);
      state.currentUser = appUser;
      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken.value);
    },
    error(state: AccountStateData, error: Error) {
      state.error = error;
    }
  },
  actions: {
    async loginAction(
      { commit }: any,
      loginData: LoginData
    ): Promise<void> {
      const accessToken = await userService.login(loginData);
      commit("login", accessToken);
      commit("error", null);
      return Promise.resolve();
    },
    async logoutAction(
      { commit }: any
    ): Promise<void> {
      await userService.logout();
      commit("logout");
      commit("error", null);
      return Promise.resolve();
    }
  },
  getters: {}
};

export default accountModule;
export {ACCESS_TOKEN_STORAGE_KEY};
