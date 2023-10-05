import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";

const useRequestsStore = defineStore("requests", {
  state: () => {
    return {
      requests: [],
    };
  },
  getters,
  actions,
});

export default useRequestsStore;
