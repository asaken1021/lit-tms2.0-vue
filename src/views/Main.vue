<template>
  <div class="container main">
    <Title title="TMS 2.0" />
    <MainMenu />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Title from "@/components/Title.vue";

export default {
  name: "MainPage",
  components: {
    MainMenu,
    Title
  }
};
</script>

<style scoped>
</style>