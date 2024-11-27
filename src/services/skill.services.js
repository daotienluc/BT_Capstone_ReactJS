import { http } from "./Config";

export const SkillServices = {
  skill: () => {
    return http.get("/skill");
  },
};
