<template>
  <div class="container view-project">
    <!-- <Title title /> -->
    <ProjectInfo />
    <Modals />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
// import Title from "@/components/Title.vue";
import Modals from "@/components/Modals.vue";

export default {
  name: "ProjectPage",
  components: {
    ProjectInfo,
    // Title,
    Modals
  }
};
</script>