<template>
  <div class="component-modals">
    <b-modal id="modal-sign_up" title="新規ユーザー登録" size="lg" centered>
      <b-form-input v-model="user.name" type="text" name="name" placeholder="表示名(ニックネーム)" />
      <b-form-input v-model="user.mail" type="email" name="mail" placeholder="メールアドレス" />
      <b-form-input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="パスワード(8文字以上24文字以内)"
      />
      <b-form-input
        v-model="user.password_confirmation"
        type="password"
        name="password_confirmation"
        placeholder="パスワード(確認)"
      />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-sign_up')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="sign_up">登録</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_in" title="サインイン" size="lg" centered>
      <b-form-input v-model="user.mail" type="email" name="mail" placeholder="メールアドレス" />
      <b-form-input v-model="user.password" type="password" name="password" placeholder="パスワード" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-sign_in')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="sign_in">サインイン</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_out" title="サインアウト" size="lg" centered>
      <p>本当にサインアウトしますか？</p>
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-sign_out')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="sign_out">サインアウト</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_group" title="新規グループ作成" size="lg" centered>
      <b-form-input type="text" name="name" placeholder="グループ名" />
      <b-form-input type="text" name="description" placeholder="グループの概要" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-create_group')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-set_groups" title="所属グループの設定" size="lg" centered>
      <b-form-input type="text" name="group_names" placeholder="グループ名(スペースで区切る)" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-set_groups')">キャンセル</b-button>
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>
    <!-- TODO:LINEの通知設定modalの追加 -->
    <b-modal id="modal-create_project" title="新規プロジェクト作成" size="lg" centered>
      <b-form-input v-model="project.name" type="text" name="project_name" placeholder="プロジェクト名" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-create_project')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="create_project">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-set_project_visibility" title="プロジェクトの公開設定" size="lg" centered>
      <b-form-radio name="project_visibility" value="public">公開</b-form-radio>
      <b-form-radio name="project_visibility" value="private">非公開</b-form-radio>
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-set_project_visibility')"
        >キャンセル</b-button>
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-remove_project" title="プロジェクトを削除" size="lg" centered>
      <p>本当にプロジェクトを削除しますか？削除すると復元することはできません。</p>
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-remove_project')">キャンセル</b-button>
        <b-button variant="primary">削除</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_phase" title="新規フェーズ作成" size="lg" centered>
      <b-form-input v-model="phase.name" type="text" name="phase_name" placeholder="フェーズ名" />
      <b-form-datepicker v-model="phase.deadline" placeholder="締め切り日付" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-create_phase')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="create_phase">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_task" title="新規タスク作成" size="lg" centered>
      <b-form-input type="text" name="task_name" placeholder="タスク名" />
      <b-form-input type="text" name="task_memo" placeholder="メモ" />
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-create_task')">キャンセル</b-button>
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-change_task_progress"
      body-class="text-centered"
      v-bind:title="'タスクの進捗度編集: ' + task.name "
      size="lg"
      centered
    >
      <b-form-input type="range" name="progress" min="0" max="100" v-model="task.progress" />
      <span>{{ task.progress }}%</span>
      <template v-slot:modal-footer>
        <b-button variant="secondary" v-on:click="$bvModal.hide('modal-change_task_progress')">キャンセル</b-button>
        <b-button variant="primary" v-on:click="change_task_progress">保存</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Modals",
  data() {
    return {
      user: {
        mail: "",
        name: "",
        password: "",
        password_confirmation: "",
      },
      project: {
        name: "",
      },
      phase: {
        name: "",
        deadline: "",
      },
      task: {
        id: -1,
        name: "",
        progress: 0,
      },
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "setSelectedTask") {
        this.task.id = state.selectedTask.task_id;
        this.task.name = state.selectedTask.task_name;
        this.task.progress = state.selectedTask.task_progress;
      }
    });
  },
  methods: {
    sign_up: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "sign_up",
          mail: this.user.mail,
          name: this.user.name,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation,
        })
        .then((response) => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.$store.commit("setUser", {
              user: {
                id: res.id,
                mail: res.mail,
                name: res.name,
                lineid: res.lineid,
              },
            });
            this.$bvModal.hide("modal-sign_up");
          } else if (res.response == "Bad Request") {
            console.log("Bad Request Reason: " + res.reason);
          }
        });
    },
    sign_in: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "sign_in",
          mail: this.user.mail,
          password: this.user.password,
        })
        .then((response) => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.$store.commit("setUser", {
              user: {
                id: res.id,
                mail: res.mail,
                name: res.name,
                lineid: res.lineid,
              },
            });
            this.$bvModal.hide("modal-sign_in");
          } else if (res.response == "Bad Request") {
            console.log("Bad Request");
          }
        });
    },
    sign_out: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "sign_out",
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("setUser", {
            user: {
              id: -1,
              mail: "",
              name: "",
              lineid: "",
            },
          });
          this.$bvModal.hide("modal-sign_out");
        });
    },
    create_project: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "create_project",
          name: this.project.name,
          user_id: this.$store.getters.getUser.id,
        })
        .then((response) => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.$router.push({
              path: "/project/" + res.project.id,
            });
            this.$bvModal.hide("modal-create_project");
          } else if (res.response == "Bad Request") {
            console.log("Bad Request Reason: " + res.reason);
          }
        });
    },
    create_phase: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "create_phase",
          name: this.phase.name,
          deadline: this.phase.deadline,
          user_id: this.$store.getters.getUser.id,
          project_id: this.$store.getters.getSelectedProject.project_id,
        })
        .then((response) => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            console.log("phase created");
            this.$store.commit("setPhaseReloadHook", {
              phaseReloadHook: {
                hook: !this.$store.getters.getPhaseReloadHook.hook,
              },
            });
            this.$bvModal.hide("modal-create_phase");
          } else if (res.response == "Bad Request") {
            console.log("Bad Request Reason: " + res.reason);
          }
        });
    },
    change_task_progress: function () {
      axios
        .post("http://localhost:4567/api/v1", {
          type: "change_task_progress",
          user_id: this.$store.getters.getUser.id,
          task_id: this.$store.getters.getSelectedTask.task_id,
          task_progress: this.task.progress,
        })
        .then((response) => {
          console.log(response);
          const res = JSON.parse(response.data);
          if (res.response == "OK") {
            this.$store.commit("setTaskUpdateHook", {
              taskUpdateHook: {
                hook: !this.$store.getters.getTaskUpdateHook.hook,
              },
            });
            this.$bvModal.hide("modal-change_task_progress");
          } else if (res.response == "Bad Request") {
            console.log("Bad Request Reason: " + res.reason);
          }
        });
    },
  },
};
</script>

<style>
.text-centered {
  text-align: center;
}
</style>