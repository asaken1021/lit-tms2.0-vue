<template>
  <div class="component-linelink">
    <div class="container">
      <b-card class="text-center">
        <b-card-body>
          <b-card-text>
            LINEに通知を送信するには，LINEアカウントと連携する必要があります。連携するには，TMS
            2.0のアカウントでサインインしてください。
          </b-card-text>
          <b-button variant="primary" v-b-modal.modal-line_sign_in>
            サインイン
          </b-button>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 20px;
}
</style>