<template>
  <div class="component-phaseinfo">
    <b-table
      hover
      bordered
      head-variant="light"
      selectable
      select-mode="single"
      v-if="isShow"
      v-bind:items="phases"
      v-bind:fields="fields"
      @row-selected="onPhaseSelected"
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhaseInfo",
  data() {
    return {
      phases: [
        {
          フェーズ名: "",
          締め切り日付: ""
        }
      ],
      fields: [
        {
          key: "name",
          label: "フェーズ名"
        },
        {
          key: "deadline",
          label: "締め切り日付",
          formatter: value => {
            return value.replace(/-/g, "/");
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
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            console.log(res.phases);

            this.phases = res.phases;

            this.isShow = true;
          } else if (res.response == "Bad Request") {
            console.log("Bad Request");
            this.phases = [
              {
                エラー: "Bad Request"
              }
            ];
            this.isShow = true;
          }
        });
    });
  },
  methods: {
    onPhaseSelected(item) {
      this.$store.commit("setSelectedPhase", {
        selectedPhase: {
          phase_id: item[0].id
        }
      });
    }
  }
};
</script>