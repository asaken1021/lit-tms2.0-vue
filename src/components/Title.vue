<template>
  <div class="component-title">
    <div class="project-title">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
};
</script>

<style scoped>
.project-title {
  border-bottom: solid black 2px;
}
.component-title {
  padding-top: 40px;
}
</style>