<template>
  <div class="component-projectinfo">
    <Title :title="this.project.name" />
    <div class="container">
      <div id="chart" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import C3 from "c3";
import "c3/c3.min.css";

export default {
  name: "ProjectInfo",
  components: {
    Title
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
      chart: null
    };
  },
  mounted() {
    this.$nextTick(function () {
      // this.handler.$emit("init", this.chart_options);

      console.log("this.data", this.data)

      this.chart = C3.generate({
        size: {
          width: this.chart_options.size.width,
          height: this.chart_options.size.height
        },
        data: {
          columns: this.chart_options.data.columns,
          type: this.chart_options.data.type,
          order: this.chart_options.data.order
        }
      })

      console.log("this.chart", this.chart);

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
      console.log(this.chart_options.data.columns);

      this.chart.load({ columns: this.chart_options.data.columns });
      // this.chart.flush();
      // this.handler.$emit("dispatch", (chart) => {
      //   chart.load(this.chart_options.data);
      // });
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