import ApplicationUser from "@/domain/applicationuser";
import LoginData from "@/domain/loginData";
import UserService from "@/services/UserService";
import decodeJwt from "@/services/JwtDecoder";
import AccessToken from "@/domain/accessToken";

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

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

const userService = new UserService();

const accountModule = {
  state: { currentUser: null, error: null },
  mutations: {
    logout(state: AccountStateData) {
      state.currentUser = null;
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    },
    login(state: AccountStateData, accessToken: AccessToken) {
      const appUser = decodeJwt(accessToken.value);
      console.log('appUser', appUser)
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
    ): Promise<AccessToken> {
      const accessToken = await userService.login(loginData);
      return commit("login", accessToken);
    }
  },
  getters: {}
};

export default accountModule;
