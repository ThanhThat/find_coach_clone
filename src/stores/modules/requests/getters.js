import useUsersStore from "../users";

export default {
  hasRequest: (state) => {
    return state.requests.length > 0;
  },

  allRequests(state) {
    const userId = useUsersStore().userId;
    return state.requests.filter((req) => req.coachId === userId);
  },
};
