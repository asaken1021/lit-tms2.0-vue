<template>
  <div id="app">
    <b-navbar toggleable="lg" class="nav-custom">
      <div class="container">
        <b-navbar-brand href="/">TMS 2.0</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link tag="b-nav-item" to="/">ホーム</router-link>
            <router-link tag="b-nav-item" to="/projcets">プロジェクト</router-link>
            <router-link tag="b-nav-item" to="/groups">グループ</router-link>
            <router-link tag="b-nav-item" to="/help">使い方</router-link>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <div v-if="getUserName != ''">
              <span class="navbar-text margin-right-5px">
                ようこそ,
                <router-link tag="a" to="/">{{ getUserName }}</router-link>
                {{ ' ' }}さん
              </span>
              <router-link
                tag="a"
                class="btn btn-primary btn-custom margin-right-5px"
                to="/user_settings"
              >ユーザー設定</router-link>
              <b-button variant="primary" class="btn-custom" v-b-modal.modal-sign_out>サインアウト</b-button>
            </div>
            <div v-else>
              <b-button variant="primary" class="margin-right-5px" v-b-modal.modal-sign_up>新規登録</b-button>
              <b-button variant="primary" v-b-modal.modal-sign_in>サインイン</b-button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    getUserName() {
      return this.$store.getters.getUser.name;
    }
  }
};
</script>

<style scoped>
.nav-custom {
  background-color: #87cefa;
}
.margin-right-5px {
  margin-right: 5px;
}
.btn-custom {
  vertical-align: unset;
}
</style>