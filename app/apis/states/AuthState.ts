import { create } from 'zustand';
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from '../utils/localStorage';
import { LocalStorageEnum } from '../enums/LocalStorage';
import { AuthStore, LoginData, User } from '../types/auth';

const useAuthState = create<AuthStore>((set) => {
  const token = getLocalStorage<string>(LocalStorageEnum.TOKEN_KEY);
  return {
    token: token,
    user: getLocalStorage<User>(LocalStorageEnum.USER_KEY),
    isAuthenticated: !!token,

    login: async (data: LoginData) => {
      setLocalStorage(LocalStorageEnum.TOKEN_KEY, data.token);
      setLocalStorage(LocalStorageEnum.USER_KEY, data.user);

      set(() => ({
        isAuthenticated: true,
        token: data.token,
        user: data.user,
      }));
    },
    logout: async () => {
      clearLocalStorage(LocalStorageEnum.TOKEN_KEY);
      clearLocalStorage(LocalStorageEnum.USER_KEY);

      set(() => ({
        isAuthenticated: false,
        token: null,
        user: null,
      }));
    },
  };
});

export default useAuthState;
