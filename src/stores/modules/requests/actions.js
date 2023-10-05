export default {
  contactCoach(payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    this.requests.push(newRequest);
  },
};
