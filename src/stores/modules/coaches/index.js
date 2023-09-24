import { defineStore } from "pinia";
import getters from "./getters";
import actions from "./actions";

const useCoachesStore = defineStore("coaches", {
  state: () => {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Quyen",
          lastName: "Dang",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Quyen Dang and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 99,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  getters,
  actions,
});

export default useCoachesStore;
