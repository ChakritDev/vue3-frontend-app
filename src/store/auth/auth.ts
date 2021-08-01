import { Profile } from "@/types/auth-types";
import { Module, ActionContext } from "vuex";
import axios from "axios";
import { BASE_API_URL } from "@/constants";

export type AuthState = {
    profile: Profile
}

const authModule: Module<AuthState, any> = {
    namespaced: true,
    state: {
        profile: {} as Profile
    },
    mutations: {
        SET_USER_PROFILE(state: AuthState, newProfile: Profile) {
            state.profile = newProfile;
        }
    },
    actions: {
        async getProfile(context: ActionContext<AuthState, null>) {
            const token = JSON.parse(localStorage.getItem("token")!);
            if (token) {
                const response = await axios.get<Profile>(`${BASE_API_URL}/auth/profile`,{
                    headers: { Authorization: 'Bearer ' + token.accessToken }
                });
                const newProfile = response.data;
                context.commit('SET_USER_PROFILE', newProfile);
            }
        }
    }
}

export default authModule;

