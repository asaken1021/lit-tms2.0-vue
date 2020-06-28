<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top nav-custom">
      <div class="container">
        <a href="/" class="navbar-brand">TMS 2.0</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/">ホーム</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/projects">プロジェクト</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/groups">グループ</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/help">使い方</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <router-view />
  </div>
</template>

<style>
.nav-custom {
  background-color: #87cefa;
}
</style>
