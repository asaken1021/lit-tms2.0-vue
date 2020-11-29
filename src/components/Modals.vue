<template>
  <div class="component-modals">
    <b-modal id="modal-sign_up" title="新規ユーザー登録" size="lg" centered>
      <b-form-input
        v-model="user.name"
        type="text"
        name="name"
        placeholder="表示名(ニックネーム)"
      />
      <b-form-input
        v-model="user.mail"
        type="email"
        name="mail"
        placeholder="メールアドレス"
      />
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
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-sign_up')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="sign_up">登録</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_in" title="サインイン" size="lg" centered>
      <b-form-input
        v-model="user.mail"
        type="email"
        name="mail"
        placeholder="メールアドレス"
      />
      <b-form-input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="パスワード"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-sign_in')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="sign_in">サインイン</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-sign_out" title="サインアウト" size="lg" centered>
      <p>本当にサインアウトしますか？</p>
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-sign_out')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="sign_out"
          >サインアウト</b-button
        >
      </template>
    </b-modal>
    <b-modal
      id="modal-create_group"
      title="新規グループ作成"
      size="lg"
      centered
    >
      <b-form-input type="text" name="name" placeholder="グループ名" />
      <b-form-input
        type="text"
        name="description"
        placeholder="グループの概要"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-create_group')"
          >キャンセル</b-button
        >
        <b-button variant="primary">作成</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-set_groups"
      title="所属グループの設定"
      size="lg"
      centered
    >
      <b-form-input
        type="text"
        name="group_names"
        placeholder="グループ名(スペースで区切る)"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-set_groups')"
          >キャンセル</b-button
        >
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>
    <!-- TODO:LINEの通知設定modalの追加 -->
    <b-modal
      id="modal-create_project"
      title="新規プロジェクト作成"
      size="lg"
      centered
    >
      <b-form-input
        v-model="modal_project.name"
        type="text"
        name="project_name"
        placeholder="プロジェクト名"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-create_project')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="create_project">作成</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-set_project_visibility"
      title="プロジェクトの公開設定"
      size="lg"
      centered
    >
      <b-form-radio name="project_visibility" value="public">公開</b-form-radio>
      <b-form-radio name="project_visibility" value="private"
        >非公開</b-form-radio
      >
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-set_project_visibility')"
          >キャンセル</b-button
        >
        <b-button variant="primary">保存</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-remove_project"
      title="プロジェクトを削除"
      size="lg"
      centered
    >
      <p>
        本当にプロジェクトを削除しますか？削除すると復元することはできません。
      </p>
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-remove_project')"
          >キャンセル</b-button
        >
        <b-button variant="primary">削除</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-create_phase"
      title="新規フェーズ作成"
      size="lg"
      centered
    >
      <b-form-input
        v-model="modal_phase.name"
        type="text"
        name="phase_name"
        placeholder="フェーズ名"
      />
      <b-form-datepicker
        v-model="modal_phase.deadline"
        placeholder="締め切り日付"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-create_phase')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="create_phase">作成</b-button>
      </template>
    </b-modal>
    <b-modal id="modal-create_task" title="新規タスク作成" size="lg" centered>
      <b-form-input
        v-model="modal_task.name"
        type="text"
        name="task_name"
        placeholder="タスク名"
      />
      <b-form-input
        v-model="modal_task.memo"
        type="text"
        name="task_memo"
        placeholder="メモ"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-create_task')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="create_task">作成</b-button>
      </template>
    </b-modal>
    <b-modal
      id="modal-change_task_progress"
      body-class="text-centered"
      v-bind:title="'タスクの進捗度編集: ' + modal_task.name"
      size="lg"
      centered
    >
      <b-form-input
        type="range"
        name="progress"
        min="0"
        max="100"
        v-model="modal_task.progress"
      />
      <span>{{ modal_task.progress }}%</span>
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-change_task_progress')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="change_task_progress"
          >保存</b-button
        >
      </template>
    </b-modal>
    <b-modal id="modal-line_sign_in" title="サインイン" size="lg" centered>
      <b-form-input
        v-model="user.mail"
        type="email"
        name="mail"
        placeholder="メールアドレス"
      />
      <b-form-input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="パスワード"
      />
      <template v-slot:modal-footer>
        <b-button
          variant="secondary"
          v-on:click="$bvModal.hide('modal-line_sign_in')"
          >キャンセル</b-button
        >
        <b-button variant="primary" v-on:click="line_sign_in"
          >サインイン</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
const api = axios.create({
  baseURL: 'http://localhost:4568/api/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  withCredentials: true
});

export default {
  name: "Modals",
  props: ["project", "phases", "tasks"],
  data() {
    return {
      user: {
        mail: "",
        name: "",
        password: "",
        password_confirmation: ""
      },
      modal_project: {},
      modal_phase: {},
      modal_task: {
        name: "",
        memo: "",
        progress: 0
      }
    };
  },
  mounted() {
    this.$nextTick(function () {
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
          const data = JSON.parse(error.config.data);
          data.token = this.$store.getters.getState.token;
          error.config.data = data;

          console.log("api interceptor after token refresh")

          return api(error.config);
        }
      })
    });

    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "setSelectedTask") {
        this.modal_task.id = state.selectedTask.task_id;
        this.modal_task.name = state.selectedTask.task_name;
        this.modal_task.progress = state.selectedTask.task_progress;
      }
    });
  },
  methods: {
    sign_up: function () {
      api
        .post("/users", {
          mail: this.user.mail,
          name: this.user.name,
          password: this.user.password,
          password_confirmation: this.user.password_confirmation
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$store.commit("setState", {
              state: {
                name: response.data.name,
                id: response.data.id,
                token: response.data.token
              }
            })
            this.$bvModal.hide("modal-sign_up")
          }
        });
    },
    sign_in: function () {
      api
        .post("/session", {
          mail: this.user.mail,
          password: this.user.password
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$store.commit("setState", {
              state: {
                name: response.data.name,
                id: response.data.id,
                token: response.data.token,
                refresh_token: response.data.refresh_token
              }
            })
            this.$bvModal.hide("modal-sign_in")
          }
        });
    },
    sign_out: function () {
      api
        .delete("/session", {

        })
        .then((response) => {
          console.log(response);
          if (response.status == 200 || response.status == 501) {
            this.$store.commit("setState", {
              state: {
                name: "",
                token: ""
              }
            })
            this.$bvModal.hide("modal-sign_out");
          }
        });
    },
    create_project: function () {
      api
        .post("/projects", {
          token: this.$store.getters.getState.token,
          name: this.modal_project.name
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$router.push({
              path: "/project/" + response.data.project.id
            })
            this.$bvModal.hide("modal-create_project")
          }
          // const res = response.data;
          // if (res.response == "OK") {
          //   this.$router.push({
          //     path: "/project/" + res.project.id
          //   });
          //   this.$bvModal.hide("modal-create_project");
          // } else if (res.response == "Bad Request") {
          //   console.log("Bad Request Reason: " + res.reason);
          // }
        });
    },
    create_phase: function () {
      api
        .post("/phases", {
          token: this.$store.getters.getState.token,
          name: this.modal_phase.name,
          deadline: this.modal_phase.deadline,
          project_id: this.project.id
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$emit("onProjectUpdate")
            this.$bvModal.hide("modal-create_phase")
          }
          // const res = response.data;
          // if (res.response == "OK") {
          //   console.log("phase created");
          //   this.$bvModal.hide("modal-create_phase");
          // } else if (res.response == "Bad Request") {
          //   console.log("Bad Request Reason: " + res.reason);
          // }
        });
    },
    create_task: function () {
      api
        .post("/tasks", {
          token: this.$store.getters.getState.token,
          name: this.modal_task.name,
          memo: this.modal_task.memo,
          project_id: this.project.id,
          phase_id: this.$store.getters.getSelectedPhase.phase_id
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$emit("onProjectUpdate")
            this.$bvModal.hide("modal-create_task")
          }
          // const res = response.data;
          // if (res.response == "OK") {
          //   this.$emit("onProjectUpdate");
          //   this.$bvModal.hide("modal-create_task");
          // } else if (res.response == "Bad Request") {
          //   console.log("Bad Request Reason: " + res.reason);
          // }
        });
    },
    change_task_progress: function () {
      api
        .put("/tasks/" + this.$store.getters.getSelectedTask.task_id, {
          token: this.$store.getters.getState.token,
          task_progress: this.modal_task.progress
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            this.$emit("onProjectUpdate")
            this.$bvModal.hide("modal-change_task_progress")
          }
          // const res = response.data;
          // if (res.response == "OK") {
          //   this.$emit("onProjectUpdate");
          //   this.$bvModal.hide("modal-change_task_progress");
          // } else if (res.response == "Bad Request") {
          //   console.log("Bad Request Reason: " + res.reason);
          // }
        });
    },
    line_sign_in: function () {
      api
        .post("/line_link", {
          mail: this.user.mail,
          password: this.user.password,
          link_token: this.$route.query.link_token
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.href(response.data.line_url);
          }
        });
    }
  }
};
</script>

<style>
.text-centered {
  text-align: center;
}
</style>