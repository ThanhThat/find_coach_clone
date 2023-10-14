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

  shouldUpdate(state) {
    const lastFetch = state.lastFetch;

    if (!lastFetch) {
      console.log("update");
      console.log(lastFetch);
      return true;
    }

    const currentTimestamp = new Date().getTime();

    return (currentTimestamp - lastFetch) / 1000 > -1;
  },
};
