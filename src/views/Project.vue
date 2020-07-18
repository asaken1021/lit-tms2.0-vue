<template>
  <div class="container view-project">
    <!-- <Title title /> -->
    <ProjectInfo />
    <PhaseInfo />
    <TaskInfo />
    <Modals />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import PhaseInfo from "@/components/PhaseInfo.vue";
import TaskInfo from "@/components/TaskInfo.vue";
// import Title from "@/components/Title.vue";
import Modals from "@/components/Modals.vue";

export default {
  name: "ProjectPage",
  components: {
    ProjectInfo,
    PhaseInfo,
    TaskInfo,
    // Title,
    Modals
  },
  mounted() {
    this.$store.commit("setSelectedProject", {
      selectedProject: {
        project_id: this.$route.params.id
      }
    });
  }
};
</script>