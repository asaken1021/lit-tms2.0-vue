<template>
  <div class="component-taskinfo">
    <b-table
      hover
      bordered
      head-variant="light"
      selectable
      select-mode="single"
      v-if="isShow"
      v-bind:items="display_tasks"
      v-bind:fields="fields"
      v-on:row-selected="onTaskSelected"
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";

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
      ],
      display_tasks: [
        {
          id: -1,
          name: "",
          memo: "",
          progress: 0
        }
      ],
      fields: [
        {
          key: "name",
          label: "タスク名"
        },
        {
          key: "memo",
          label: "メモ"
        },
        {
          key: "progress",
          label: "進捗",
          formatter: value => {
            return value + "%";
          }
        }
      ],
      isShow: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "get_project_info",
          project_id: this.$store.getters.getSelectedProject.project_id
        })
        .then(response => {
          console.log("task_response", response);
          const res = JSON.parse(response.data);

          if (res.response == "OK") {
            this.tasks = res.tasks;
          }
        });
    });

    this.$store.subscribe(mutation => {
      if (mutation.type == "setSelectedPhase") {
        this.onPhaseUpdated();
      }
    });
  },
  methods: {
    onTaskSelected: function(item) {
      const userInfo = this.$store.getters.getUser;
      const projectInfo = this.$store.getters.getSelectedProject;

      if (item[0] != null) {
        this.$store.commit("setSelectedTask", {
          selectedTask: {
            task_id: item[0].id,
            task_name: item[0].name,
            task_progress: item[0].progress
          }
        });
        if (userInfo.id == projectInfo.project_user_id) {
          this.$bvModal.show("modal-edit_task_progress");
        }
      }
    },
    onPhaseUpdated: function() {
      const selectedPhaseId = this.$store.getters.getSelectedPhase.phase_id;

      this.isShow = true;

      this.display_tasks = this.tasks.filter(task => {
        if (task.phase_id == selectedPhaseId) {
          return true;
        }
      });
    }
  }
};
</script>

<style>
.component-taskinfo {
  margin-top: 20px;
}
</style>