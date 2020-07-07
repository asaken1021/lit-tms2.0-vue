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
          <b-navbar-nav class="ml-auto"></b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
.nav-custom {
  background-color: #87cefa;
}
</style>