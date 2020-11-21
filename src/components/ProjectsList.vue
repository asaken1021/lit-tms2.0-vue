<template>
  <div class="component-projectslist">
    <div class="container">
      <b-card
        class="text-center"
        v-for="project in projects"
        v-bind:key="project.id"
      >
        <b-card-body>
          <router-link tag="a" :to="`/project/${project.id}`">
            <h4>{{ project.name }}</h4>
          </router-link>
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
    const api = axios.create({
      baseURL: 'http://localhost:4568/api/v2',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json',
      withCredentials: true
    });

    api.interceptors.response.use(response => { console.log("api interceptor response", response); return response }, async error => {
      console.log("api interceptor before retry", api, error.config, error.response);
      if (error.response.status == 401 && !error.config.isRetried) {
        console.log("token refresh called");
        await api.put("/session", {
          refresh_token: this.$store.getters.getState.refresh_token
        })
          .then(response => {
            console.log("api interceptor doing token refresh", response);

            this.$store.commit("setState", {
              state: {
                name: response.data.name,
                id: response.data.id,
                token: response.data.token,
                refresh_token: response.data.refresh_token
              }
            })
          })
        error.config.isRetried = true;
        error.config.params = {
          token: this.$store.getters.getState.token
        };

        console.log("api interceptor after token refresh")

        return api(error.config);
      }
    })

    this.$nextTick(function () {
      console.log("nextTick before get request")
      api
        .get("/projects", {
          params: {
            token: this.$store.getters.getState.token
          }
        })
        .then(response => {
          console.log("nextTick doing get project data", response);
          if (response.status == 200) {
            this.projects = response.data.projects
          }
        });
    });
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