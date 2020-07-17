<template>
  <div class="component-title">
    <div class="title">
      <div class="container">
        <h2 class="title-text">{{ title }}</h2>
      </div>
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
.title {
  border-bottom: solid black 2px;
}
.component-title {
  padding-top: 40px;
}
.title-text {
  font-size: 40px;
}
</style>