import { http } from "./Config";

export const authService = {
  signIn: (data) => {
    return http.post("/auth/signin", data);
  },
  signUp: (data) => {
    return http.post("/auth/signup", data);
  },
};
