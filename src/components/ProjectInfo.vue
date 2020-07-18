<template>
  <div class="component-projectinfo">
    <Title v-bind:title="this.project.name" />
    <div class="container">
      <vue-c3 :handler="handler" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import axios from "axios";
import Vue from "vue";
import VueC3 from "vue-c3";
import "c3/c3.min.css";

export default {
  name: "ProjectInfo",
  components: {
    Title,
    VueC3
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
        updated_at: ""
      },
      chart_options: {
        size: {
          width: 150,
          height: 150
        },
        data: {
          columns: [
            ["完了", 0],
            ["未完了", 100]
          ],
          type: "pie",
          order: null
        }
      },
      handler: new Vue()
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.project.name = "Loading...";
      axios
        .post("http://localhost:4567/api/v1", {
          type: "get_project_info",
          project_id: this.$store.getters.getSelectedProject.project_id
        })
        .then(response => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.project = res.project;
            // this.project.phases = res.phases;

            // for (let x = 0; x < this.project.phases.length; x++) {
            //   let phase_tasks = res.tasks.filter(item => {
            //     if (item.phase_id == x + 1) {
            //       return true;
            //     }
            //   });
            //   this.project.phases[x].tasks = phase_tasks;
            // }

            this.handler.$emit("init", this.chart_options);

            this.chart_options.data.columns = [
              ["完了", this.project.progress],
              ["未完了", 100 - this.project.progress]
            ];
          } else if (res.response == "Bad Request") {
            console.log("Bad Request");
            this.project.name = "Bad Request";
          }
        });
    });
  },
  watch: {
    "chart_options.data.columns": function() {
      console.log("watch called");
      this.handler.$emit("dispatch", chart => {
        chart.load(this.chart_options.data);
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>