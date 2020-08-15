<template>
  <div class="component-loading">
    <spinner></spinner>
  </div>
</template>

<script>
import spinner from "vue-simple-spinner";

export default {
  name: "Loading",
  components: {
    spinner
  }
}
</script>