<template>
  <div class="main-component">
    <div class="container">
      <br />
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title">使い方</h4>
          <p class="card-text">初めてTMS 2.0を使う方はこちら</p>
          <router-link tag="a" class="btn btn-primary" to="/help">使い方</router-link>
        </div>
      </div>
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title">新規プロジェクトを作成</h4>
          <p class="card-text">新しくプロジェクトを作成します。</p>
        </div>
      </div>
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title">プロジェクト一覧</h4>
          <p class="card-text">プロジェクトの一覧を表示します。</p>
          <router-link tag="a" class="btn btn-primary" to="/projects">表示</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  props: {}
};
</script>