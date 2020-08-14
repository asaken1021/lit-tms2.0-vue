<template>
  <div class="component-projectslist">
    <div class="container">
      <b-card class="text-center" v-for="project in projects" v-bind:key="project.id">
        <b-card-body>
          <!-- <router-link tag="a" :to="`/project/${project.id}`"> -->
          <a href="#">
            <h4 v-on:click="showLoading(project.id)">{{ project.name }}</h4>
          </a>
          <!-- </router-link> -->
        </b-card-body>
      </b-card>
      <b-card class="text-center" v-if="showError">
        <b-card-body>
          <h3 class="text-danger text-underlined">{{ errorTitle }}</h3>
          <h4 class="text-danger">{{ errorMessage }}</h4>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProjectsList",
  data() {
    return {
      projects: [],
      errorTitle: "",
      errorMessage: "",
      showError: false
    };
  },
  mounted() {
    this.$nextTick(function () {
      const userInfo = this.$store.getters.getUser;
      axios
        .post("http://localhost:4567/api/v1", {
          type: "get_projects",
          id: userInfo.id
        })
        .then(response => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.projects = res.projects;
          } else if (res.response == "Bad Request") {
            console.log("Bad Request Reason: " + res.reason);
            if (res.reason == "USER_NOT_FOUND") {
              this.errorTitle = "ユーザー情報がありません";
              this.errorMessage =
                "サインインしていないため、プロジェクト一覧を表示できません。表示するにはサインインしてください。";
              this.showError = true;
            }
          }
        });
    });
  },
  methods: {
    showLoading: function (id) {
      this.$store.commit("setLoadingState", {
        loadingState: {
          isShow: true
        }
      })
      this.$router.push("/project/" + id);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.text-underlined {
  text-decoration: underline;
}
</style>