import { defineStore } from "pinia";
import getters from "./getters";
import actions from "./actions";

const useCoachesStore = defineStore("coaches", {
  state: () => {
    return {
      userIsCoach: false,
      coaches: [],
    };
  },
  getters,
  actions,
});

export default useCoachesStore;
