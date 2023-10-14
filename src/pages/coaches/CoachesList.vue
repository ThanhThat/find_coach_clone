<template>
  <section>
    <base-dialog
      :show="!!error"
      title="An error occurred"
      fixed=""
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>

    <section>
      <coach-filter @changeFilter="setFilter"></coach-filter>
    </section>
    <base-card>
      <section>
        <div class="controls">
          <base-button @click="loadCoaches(true)">Refresh</base-button>
          <base-button link to="/register" v-if="!isCoach"
            >Register as Coach</base-button
          >
        </div>

        <transition name="coaches">
          <div v-if="isLoading">
            <base-spinner></base-spinner>
          </div>
          <ul v-else-if="hasCoaches">
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
        </transition>
      </section>
    </base-card>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import useCoachesStore from "../../stores/modules/coaches";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilter: { frontend: true, backend: true, career: true },
    };
  },
  computed: {
    ...mapStores(useCoachesStore),

    filteredCoaches() {
      const coaches = this.coachesStore.allCoaches;

      return coaches.filter((coach) => {
        for (const key in this.activeFilter) {
          if (this.activeFilter[key] && coach.areas.includes(key)) return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.coachesStore.hasCoaches;
    },

    isCoach() {
      return this.coachesStore.isCoach;
    },
  },

  created() {
    this.loadCoaches();
  },

  components: {
    CoachItem,
    CoachFilter,
  },

  methods: {
    setFilter(updatedFilter) {
      this.activeFilter = updatedFilter;
    },

    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.coachesStore.loadCoaches({ forceRefresh: false });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },

    handleError() {
      this.error = null;
    },
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

.coaches-enter-active {
  transition: all 0.3s ease-out;
}

// .coaches-leave-active {
//   transition: all 0.3s ease-in;
// }

.coaches-enter-from,
.coaches-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
