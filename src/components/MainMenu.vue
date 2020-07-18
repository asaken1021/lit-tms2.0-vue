<template>
  <div class="component-mainmenu">
    <div class="container">
      <b-card title="使い方" class="text-center">
        <b-card-text>初めてTMS 2.0を使う方はこちら</b-card-text>
        <router-link tag="a" class="btn btn-primary" to="/help">使い方</router-link>
      </b-card>
      <b-card title="新規プロジェクトを作成" class="text-center">
        <b-card-text>新しくプロジェクトを作成します。</b-card-text>
        <b-button variant="primary" v-b-modal.modal-create_project>作成</b-button>
      </b-card>
      <b-card title="プロジェクト一覧" class="text-center">
        <b-card-text>プロジェクトの一覧を表示します。</b-card-text>
        <router-link tag="a" class="btn btn-primary" to="/projects">表示</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>