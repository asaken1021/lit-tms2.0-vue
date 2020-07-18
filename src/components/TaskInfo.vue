<template>
  <div class="component-taskinfo"></div>
</template>

<script>
export default {
  name: "TaskInfo",
  data() {
    return {
      tasks: [
        {
          id: -1,
          name: "",
          memo: "",
          progress: 0
        }
      ]
    };
  }
};
</script>