import useUsersStore from "../users";
import coachesApi from "../../../apis/models/coaches";

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

    if (!response.status === 200) {
      console.log("Error: ", response.error);
    }

    this.coaches.push(coachData);
  },

  async loadCoaches() {
    const response = await coachesApi.getAll();
    const responseData = await response?.data;

    if (!response.status === 200) {
      console.log("Error: ", response.error);
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
    console.log(responseData);
    console.log(coaches);

    this.coaches = coaches;
  },
};
