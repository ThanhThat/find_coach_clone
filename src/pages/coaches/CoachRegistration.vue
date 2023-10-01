<template>
  <base-card>
    <h2>Register as Coach now</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
import useCoachesStore from "../../stores/modules/coaches";
import { mapStores } from "pinia";

export default {
  components: { CoachForm },

  computed: {
    ...mapStores(useCoachesStore),
  },

  methods: {
    saveData(data) {
      if (
        !data.first ||
        !data.last ||
        !data.desc ||
        !data.rate ||
        data.areas.length <= 0
      ) {
        return;
      }

      this.coachesStore.registerCoach(data);
      this.$router.push("/coaches");
    },
  },
};
</script>

<style lang="scss" scoped></style>
