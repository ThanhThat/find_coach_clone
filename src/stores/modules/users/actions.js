import { generateId } from "@/utilites";
import useCoachesStore from "../coaches";

export default {
  autoLogin() {
    const newUserId = generateId(useCoachesStore().coaches);

    this.userId = newUserId;

    return this.userId;
  },
};
