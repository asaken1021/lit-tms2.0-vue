<template>
  <div class="component-project">
    <Title v-bind:title="this.project.name" />
    <div class="container"></div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import axios from "axios";

export default {
  name: "Project",
  components: {
    Title
  },
  data() {
    return {
      project: {
        id: -1,
        name: "",
        progress: 0.0,
        user_id: -1,
        visibility: "",
        created_at: "",
        updated_at: "",
        phases: [
          {
            id: -1,
            name: "",
            deadline: "",
            project_id: -1,
            tasks: [
              {
                id: -1,
                name: "",
                memo: "",
                progress: 0
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(function() {
      const userInfo = this.$store.getters.getUser;
      axios
        .post("http://localhost:4567/api/v1", {
          type: "get_project_info",
          id: userInfo.id,
          project_id: this.$route.params.id
        })
        .then(response => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.project = res.project;
            this.project.phases = res.phases;

            for (let x = 0; x < this.project.phases.length; x++) {
              let phase_tasks = res.tasks.filter(item => {
                if (item.phase_id == x + 1) {
                  return true;
                }
              });
              this.project.phases[x].tasks = phase_tasks;
            }
            // for (let task of res.tasks) {
            //   console.log(task.phase_id);
            //   this.project.phases[task.phase_id - 1]["tasks"] = task;
            // }
          }
        });
    });
  }
};
</script>