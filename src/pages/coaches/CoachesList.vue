<template>
  <section>
    <section>Filter</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>

      <ul v-if="hasCoaches">
        List of Coaches
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No Coach Found.</h3>
    </section>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import useCoachesStore from "../../stores/modules/coaches";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCoachesStore),
    filteredCoaches() {
      return this.coachesStore.allCoaches;
    },
    hasCoaches() {
      return this.coachesStore.hasCoaches;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
