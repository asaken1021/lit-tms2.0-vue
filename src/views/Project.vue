<template>
  <div class="container view-project">
    <ProjectInfo :project="project" />
    <PhaseInfo :project="project" :phases="phases" />
    <TaskInfo :project="project" :tasks="tasks" />
    <Modals
      :project="project"
      :phases="phases"
      :tasks="tasks"
      @onProjectUpdate="projectUpdateEvent"
    />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import PhaseInfo from "@/components/PhaseInfo.vue";
import TaskInfo from "@/components/TaskInfo.vue";
import Modals from "@/components/Modals.vue";
import axios from "axios";
const api = axios.create({
  baseURL: 'http://localhost:4568/api/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  withCredentials: true
});

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
  created() {
    this.$nextTick(function () {
      console.log("Project.vue created");
    })
  },
  mounted() {
    this.$nextTick(function () {
      console.log("^q^");

      this.getProject();

      // console.log("before setLoadingState");
      // this.$store.commit("setLoadingState", {
      //   loadingState: {
      //     ishow: false
      //   }
      // })
      // console.log("after setLoadingState");
    });
  },
  methods: {
    getProject() {
      api.get("/projects/" + this.$route.params.id, {
      }).then((response) => {
        console.log(response);

        this.project = response.data.project;
      })
      api.get("/phases?project_id=" + this.$route.params.id, {
      }).then((response) => {
        console.log("phase get", response);

        this.phases = response.data.phases;
      })
      api.get("/tasks?project_id=" + this.$route.params.id, {
      }).then((response) => {
        console.log("task get", response);

        this.tasks = response.data.tasks;
      })
    },
    projectUpdateEvent() {
      console.log("projectUpdateEvent called");
      this.getProject();
    }
  }
};
</script>