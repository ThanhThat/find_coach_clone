<template>
  <section>
    <app-header></app-header>
    <router-view></router-view>
  </section>
</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0 !important;
}
</style>
