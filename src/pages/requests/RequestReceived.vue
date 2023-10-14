<template>
  <section>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>

    <section>
      <base-card>
        <header>
          <h2>Request Received</h2>
        </header>

        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequest">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :email="request.userEmail"
            :message="request.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received request any yet!</h3>
      </base-card>
    </section>
  </section>
</template>

<script>
import useRequestsStore from "../../stores/modules/requests";
import { mapStores } from "pinia";
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  components: {
    RequestItem,
  },

  created() {
    this.loadRequest();
  },

  computed: {
    ...mapStores(useRequestsStore),

    receivedRequests() {
      return this.requestsStore.allRequests;
    },

    hasRequest() {
      return !this.isLoading && this.requestsStore.hasRequest;
    },
  },

  methods: {
    async loadRequest() {
      this.isLoading = true;

      try {
        await this.requestsStore.fetchRequests();
      } catch (error) {
        this.error = error.message || "Something failed!";
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
