<template>
  <div class="component-projectinfo">
    <Title :title="this.project.name" />
    <div class="container">
      <vue-c3 :handler="handler" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Vue from "vue";
import VueC3 from "vue-c3";
import "c3/c3.min.css";

export default {
  name: "ProjectInfo",
  components: {
    Title,
    VueC3
  },
  props: ["project"],
  data() {
    return {
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
    this.$nextTick(function () {
      this.handler.$emit("init", this.chart_options);
      this.projectChartColumnUpdate();
    });
  },
  methods: {
    projectChartColumnUpdate: function () {
      this.chart_options.data.columns = [
        ["完了", this.project.progress],
        ["未完了", 100 - this.project.progress]
      ];
    }
  },
  watch: {
    "chart_options.data.columns": function () {
      console.log("watch called");
      this.handler.$emit("dispatch", (chart) => {
        chart.load(this.chart_options.data);
      });
    },
    "project": function () {
      this.projectChartColumnUpdate();
    }
  }
};
</script>

<style scoped>
/* .container {
  margin-top: 20px;
} */
</style>