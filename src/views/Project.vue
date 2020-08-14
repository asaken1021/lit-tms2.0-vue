<template>
  <div class="container view-project">
    <ProjectInfo :project="project" />
    <PhaseInfo :project="project" :phases="phases" />
    <TaskInfo :project="project" :tasks="tasks" />
    <Modals @onProjectUpdate="projectUpdateEvent" />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import PhaseInfo from "@/components/PhaseInfo.vue";
import TaskInfo from "@/components/TaskInfo.vue";
import Modals from "@/components/Modals.vue";
import axios from "axios";

export default {
  name: "ProjectPage",
  components: {
    ProjectInfo,
    PhaseInfo,
    TaskInfo,
    Modals
  },
  data() {
    return {
      project: {
        id: -1,
        name: "",
        progress: 0.0,
        project_user_id: -1,
        visibility: ""
      },
      phases: [
        {
          id: -1,
          name: "",
          deadline: ""
        }
      ],
      tasks: [
        {
          id: -1,
          name: "",
          memo: "",
          progress: 0
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(function () {
      console.log("^q^");

      this.getProject();
    });
  },
  methods: {
    getProject() {
      axios.post("http://localhost:4567/api/v1", {
        type: "get_project_info",
        project_id: this.$route.params.id
      }).then((response) => {
        console.log(response);
        const res = JSON.parse(response.data);

        this.project = res.project;
        this.phases = res.phases;
        this.tasks = res.tasks;
      })
    },
    projectUpdateEvent() {
      console.log("projectUpdateEvent called");
      this.getProject();
    }
  }
};
</script>