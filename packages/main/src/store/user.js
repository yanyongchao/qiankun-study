import { makeAutoObservable } from "mobx";
import { getToken } from "@/utils/auth";
import { reqLogin, reqLogout } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";

class UserStore {
  name = "";
  role = "";
  avatar = "";
  token = getToken();
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  get isLogin() {
    return this.username.length > 0;
  }
  async login({ username, password }) {
    const ret = await reqLogin({
      username: username.trim(),
      password: password,
    });
    const { status, token } = ret;
    if (status === 0) {
      this.token = token;
      setToken(token);
    }

    return ret;
  }
  async logout() {
    const { status } = await reqLogout(this.token);
    if (status === 0) {
      removeToken();
    }
  }
}

const userStore = new UserStore();

export default userStore;
