import requestsApi from "../../../apis/models/requestsApi";
import { STATUS_CODE } from "../../../constants";
import useUsersStore from "../users";

export default {
  async contactCoach(payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await requestsApi.add(newRequest);
    const responseData = await response.data;

    newRequest.id = responseData.name;

    if (!response.status === STATUS_CODE.SUCCESS) {
      const error = new Error(
        responseData.message || "Failed to send request!"
      );

      throw error;
    }

    this.requests.push(newRequest);
  },

  async fetchRequests() {
    // user login is a coach
    const coachId = useUsersStore().userId;

    const response = await requestsApi.getById(coachId);
    const responseData = await response.data;

    if (!response.status === STATUS_CODE.SUCCESS) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: responseData[key].coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      requests.push(request);
    }

    this.requests = requests;
  },
};
