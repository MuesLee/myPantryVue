import ApplicationUser from '@/domain/applicationuser';

interface AccountState {
  currentUser: ApplicationUser | null;
}

const accountModule = {
  state: { currentUser: null } as AccountState,
  mutations: {
    logout(state: AccountState) {
      state.currentUser = null;
      localStorage.removeItem('accessToken');
    },
  },
  actions: {},
  getters: {},
};

export default accountModule;
