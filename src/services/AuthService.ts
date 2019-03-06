import store from "@/store/index";
import { AccountState } from "@/store/modules/account";

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";

class AuthService {
  public userIsAuthenticated(): boolean {
    return (
      !!(store.state as AccountState).account.currentUser ||
      !!localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
    );
  }
}

const authService = new AuthService();

export default authService;
export { ACCESS_TOKEN_STORAGE_KEY };
