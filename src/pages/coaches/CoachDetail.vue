<template>
  <section>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hours</h3>
      </base-card>
    </section>

    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>

          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>

    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :type="area"
          :title="area"
          :key="area"
        >
        </base-badge>

        <p>{{ description }}</p>
      </base-card>
    </section>
  </section>
</template>

<script>
import useCoachesStore from "../../stores/modules/coaches";
import { mapStores } from "pinia";

export default {
  props: ["id"],

  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    ...mapStores(useCoachesStore),

    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },

    rate() {
      return this.selectedCoach.hourlyRate;
    },

    areas() {
      return this.selectedCoach.areas;
    },

    description() {
      return this.selectedCoach.description;
    },

    contactLink() {
      return `/coaches/${this.id}/contact`;
    },
  },

  created() {
    this.selectedCoach = this.coachesStore.allCoaches.find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style lang="scss" scoped></style>
