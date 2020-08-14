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
    <b-button
      variant="primary"
      v-on:click="$bvModal.show('modal-create_task')"
      v-if="checkUser()"
    >新規タスク作成</b-button>
  </div>
</template>

<script>
export default {
  name: "TaskInfo",
  props: ["project", "tasks"],
  data() {
    return {
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
          formatter: (value) => {
            return value + "%";
          }
        }
      ],
      isShow: false,
      isShowButton: false
    };
  },
  mounted() {
    this.$store.subscribe((mutation) => {
      if (mutation.type == "setSelectedPhase") {
        this.onPhaseUpdated();
      }
    });

    // this.$store.subscribe(async (mutation) => {
    //   if (mutation.type == "setTaskUpdateHook") {
    //     await this.onTaskUpdated();
    //     // console.log("taskUpdateHook_beforePhaseUpdate", this.display_tasks);
    //     this.onPhaseUpdated();
    //     // console.log("taskUpdateHook_afterPhaseUpdate", this.display_tasks);
    //   }
    // });
  },
  methods: {
    onTaskSelected: function (item) {
      const userInfo = this.$store.getters.getUser;

      if (item[0] != null) {
        this.$store.commit("setSelectedTask", {
          selectedTask: {
            task_id: item[0].id,
            task_name: item[0].name,
            task_progress: item[0].progress
          }
        });
        if (userInfo.id == this.project.user_id) {
          this.$bvModal.show("modal-change_task_progress");
        }
      }
    },
    onPhaseUpdated: function () {
      console.log("onPhaseUpdated called");

      this.taskFilter();

      this.isShow = true;
    },
    checkUser: function () {
      if (this.isShow) {
        if (this.$store.getters.getUser.id == this.project.user_id) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    taskFilter: function () {
      const selectedPhaseId = this.$store.getters.getSelectedPhase.phase_id;
      this.display_tasks = this.tasks.filter((task) => {
        if (task.phase_id == selectedPhaseId) {
          return true;
        }
      });
    }
  },
  watch: {
    project: function () {
      this.taskFilter();
    }
  }
};
</script>

<style>
.component-taskinfo {
  margin-top: 20px;
}
</style>