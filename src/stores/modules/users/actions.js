import { generateId } from "@/utilites";
import useCoachesStore from "../coaches";

export default {
  autoLogin() {
    const newUserId = generateId(useCoachesStore().coaches);

    this.userId = newUserId;

    localStorage.setItem("userId", this.userId);

    return this.userId;
  },
};
