export default {
  registerCoach(payload) {
    console.log(payload.first);
    const coachData = {
      id: "c3",
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    this.coaches.push(coachData);
  },
};
