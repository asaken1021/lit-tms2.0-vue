<template>
  <div class="container view-main">
    <Title title="TMS 2.0" />
    <MainMenu />
    <Modals />
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Title from "@/components/Title.vue";
import Modals from "@/components/Modals.vue";

export default {
  name: "MainPage",
  components: {
    MainMenu,
    Title,
    Modals
  }
};
</script>

<style scoped>
</style>