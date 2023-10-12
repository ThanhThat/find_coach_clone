<template>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>

      <ul v-if="hasRequest">
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
</template>

<script>
import useRequestsStore from "../../stores/modules/requests";
import { mapStores } from "pinia";
import RequestItem from "../../components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem,
  },
  computed: {
    ...mapStores(useRequestsStore),

    receivedRequests() {
      return this.requestsStore.allRequests;
    },

    hasRequest() {
      return this.requestsStore.hasRequest;
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
