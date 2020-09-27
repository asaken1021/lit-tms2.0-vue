<template>
  <div class="container view-projects">
    <Title v-if="!isShow()" title="プロジェクト一覧" />
    <ProjectsList v-if="!isShow()" />
    <!-- <Loading v-if="isShow()" /> -->
    <Modals />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";
// import Loading from "@/components/Loading.vue";
import Title from "@/components/Title.vue";
import Modals from "@/components/Modals.vue";

export default {
  name: "ProjectsPage",
  components: {
    ProjectsList,
    // Loading,
    Title,
    Modals
  },
  methods: {
    isShow() {
      // return this.$store.getters.getLoadingState.isShow;
      return false;
    }
  }
};
</script>

<style scoped>
</style>