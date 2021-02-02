<template>
  <div class="component-usersettings">
    <div class="container">
      <b-card title="LINEの通知設定" class="text-center">
        <b-card-text>
          LINEに通知を送信する曜日と時間帯を設定します。
        </b-card-text>
        <b-button variant="primary" v-b-modal.modal-set_line_notify>
          設定
        </b-button>
        <!-- まだ存在しないmodal -->
      </b-card>
      <b-card title="所属グループの設定" class="text-center">
        <b-card-text>
          グループに参加すると、所属するユーザーの進捗を確認できます。
        </b-card-text>
        <b-button variant="primary" v-b-modal.modal-set_groups>
          所属グループ設定
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSettings"
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>