import { createStore } from "vuex";
import authModule from "./auth/auth";

export default createStore({
  modules: {
    authModule:authModule,
  },
});
