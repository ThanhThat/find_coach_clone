<template>
  <base-card>
    <section>Filter</section>
    <section>
      <div class="controls">
        <base-button>Refresh</base-button>
        <base-button link to="/register" mode="">Register as Coach</base-button>
      </div>

      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        >
        </coach-item>
      </ul>

      <h3 v-else>No Coach Found.</h3>
    </section>
  </base-card>
</template>

<script>
import { mapStores } from "pinia";
import useCoachesStore from "../../stores/modules/coaches";
import CoachItem from "../../components/coaches/CoachItem.vue";

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

  components: {
    CoachItem,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
