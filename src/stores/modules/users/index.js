import { defineStore } from "pinia";
import getters from "./getters";
import actions from "./actions";

const useUsersStore = defineStore("users", {
  state: () => {
    return {
      userId: "c3",
    };
  },
  getters,
  actions,
});

export default useUsersStore;
