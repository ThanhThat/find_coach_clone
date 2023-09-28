<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hours</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :type="area"
        :key="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="coachContactLink" mode="outline"
        >Contact</base-button
      >
      <base-button link :to="coachDetailLink">View detail</base-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "CoachItem",
  props: {
    id: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    rate: {
      type: Number,
      required: true,
    },

    areas: {
      type: String,
      required: true,
    },
  },

  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },

    coachContactLink() {
      return `coaches/${this.id}/contact`; // /coaches/c1/contact
    },

    coachDetailLink() {
      return `coaches/${this.id}`; // /coaches/c1
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
</style>
