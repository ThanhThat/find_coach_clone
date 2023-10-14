import axiosClient from "../axiosClient";

const SCHEMA = "requests";

const requestsApi = {
  getById(coachId) {
    const url = `/${SCHEMA}/${coachId}.json`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/${SCHEMA}/${data.coachId}.json`;
    return axiosClient.post(url, data);
  },
};

export default requestsApi;
