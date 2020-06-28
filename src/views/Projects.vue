<template>
  <div class="container projects">
    <Title title="プロジェクト一覧" />
    <MainMenu />
  </div>
</template>

<script>
// import ProjectList from "@/components/ProjectList.vue";
import Title from "@/components/Title.vue";

export default {
  name: "ProjectsPage",
  components: {
    // ProjectList,
    Title
  }
};
</script>

<style scoped>
</style>