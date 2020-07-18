<template>
  <div class="component-projectslist">
    <div class="container">
      <b-card class="text-center" v-for="project in projects" v-bind:key="project.id">
        <b-card-body>
          <router-link tag="a" :to="`/project/${project.id}`">
            <h4>{{project.name}}</h4>
          </router-link>
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
      projects: []
    };
  },
  mounted() {
    this.$nextTick(function() {
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
</style>