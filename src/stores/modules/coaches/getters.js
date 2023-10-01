import useUserStore from "../users";

export default {
  allCoaches(state) {
    return state.coaches;
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },

  isCoach(state) {
    const coaches = state.coaches;
    const userId = useUserStore().userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
