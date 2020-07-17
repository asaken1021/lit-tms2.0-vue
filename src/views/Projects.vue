<template>
  <div class="container view-projects">
    <Title title="プロジェクト一覧" />
    <ProjectsList />
    <Modals />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";
import Title from "@/components/Title.vue";
import Modals from "@/components/Modals.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectsList,
    Title,
    Modals
  }
};
</script>

<style scoped>
</style>