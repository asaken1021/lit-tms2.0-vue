<template>
  <div class="component-loading">
    <spinner v-if="isShow"></spinner>
  </div>
</template>

<script>
import spinner from "vue-simple-spinner";

export default {
  name: "Loading",
  components: {
    spinner
  },
  props: ["isShow"]
}
</script>