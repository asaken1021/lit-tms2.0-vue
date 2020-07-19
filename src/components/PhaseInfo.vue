<template>
  <div class="component-phaseinfo">
    <b-table
      hover
      bordered
      head-variant="light"
      selectable
      select-mode="single"
      class="margin-bottom-20px"
      v-if="isShow"
      v-bind:items="phases"
      v-bind:fields="fields"
      v-on:row-selected="onPhaseSelected"
    ></b-table>
    <b-button
      variant="primary"
      v-on:click="$bvModal.show('modal-create_phase')"
      v-if="isShowButton"
    >新規フェーズ作成</b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PhaseInfo",
  data() {
    return {
      phases: [],
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
      isShow: false,
      isShowButton: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.phaseLoad();
    });

    this.$store.subscribe(mutation => {
      if (mutation.type == "setPhaseReloadHook") {
        this.phaseLoad();
      }
    });
  },
  methods: {
    phaseLoad: function() {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "get_project_info",
          project_id: this.$store.getters.getSelectedProject.project_id
        })
        .then(response => {
          console.log("phase_response", response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            // console.log(res.phases);

            this.phases = res.phases;

            if (this.phases.length == 0) {
              this.phases = [
                {
                  name: "フェーズがありません",
                  deadline: ""
                }
              ];
            }

            this.isShow = true;

            if (this.$store.getters.getUser.id == res.project.user_id) {
              this.isShowButton = true;
            }
          } else if (res.response == "Bad Request") {
            console.log("Bad Request");
            this.isShow = false;
          }
        });
    },
    onPhaseSelected: function(item) {
      if (item[0] != null) {
        this.$store.commit("setSelectedPhase", {
          selectedPhase: {
            phase_id: item[0].id
          }
        });
      }
    }
  }
};
</script>

<style>
.margin-bottom-20px {
  margin-bottom: 20px;
}
</style>