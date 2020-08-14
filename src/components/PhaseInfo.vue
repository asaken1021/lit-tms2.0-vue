<template>
  <div class="component-phaseinfo">
    <b-table
      hover
      bordered
      head-variant="light"
      selectable
      select-mode="single"
      class="margin-bottom-20px"
      v-bind:items="phases"
      v-bind:fields="fields"
      v-on:row-selected="onPhaseSelected"
    ></b-table>
    <b-button
      variant="primary"
      v-on:click="$bvModal.show('modal-create_phase')"
      v-if="checkUser()"
    >新規フェーズ作成</b-button>
  </div>
</template>

<script>
export default {
  name: "PhaseInfo",
  props: ["project", "phases"],
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "フェーズ名"
        },
        {
          key: "deadline",
          label: "締め切り日付",
          formatter: (value) => {
            return value.replace(/-/g, "/");
          }
        }
      ],
      p: []
    };
  },
  methods: {
    checkUser: function () {
      console.log("PhaseInfo checkUser called");
      if (this.p.user_id == this.$store.getters.getUser.id) {
        return true;
      } else {
        return false;
      }
    },
    onPhaseSelected: function (item) {
      if (item[0] != null) {
        this.$store.commit("setSelectedPhase", {
          selectedPhase: {
            phase_id: item[0].id
          }
        });
      }
    }
  },
  watch: {
    project: function (newerProjectInfo) {
      console.log("PhaseInfo this.project watch called", newerProjectInfo);
      this.p = newerProjectInfo;
      // this.checkUser();
    }
  }
};
</script>

<style>
.margin-bottom-20px {
  margin-bottom: 20px;
}
</style>