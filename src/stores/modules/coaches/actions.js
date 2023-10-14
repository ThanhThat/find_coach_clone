import { STATUS_CODE } from "../../../constants";
import useUsersStore from "../users";
import coachesApi from "@/apis/models/coachesApi";

export default {
  async registerCoach(payload) {
    const coachData = {
      id: useUsersStore().autoLogin(),
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await coachesApi.update(coachData);

    if (response.status !== STATUS_CODE.SUCCESS) {
      console.log("Error: ", response.error);
    }

    this.coaches.push(coachData);
  },

  async loadCoaches(payload) {
    const response = await coachesApi.getAll();
    const responseData = await response?.data;

    if (!payload.forceRefresh && !this.shouldUpdate) return;

    if (!response.status === STATUS_CODE.SUCCESS) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const coaches = [];

    for (const key in response.data) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      coaches.push(coach);
    }

    this.coaches = coaches;
  },

  setFetchTimestamp() {
    this.lastFetch = new Date().getTime();
  },
};
