import { defineStore } from "pinia";
import getters from "./getters";
import actions from "./actions";

const useUsersStore = defineStore("users", {
  state: () => {
    return {
      userId: localStorage.getItem("userId") || null,
    };
  },
  getters,
  actions,
});

export default useUsersStore;
