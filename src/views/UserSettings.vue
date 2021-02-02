<template>
  <div class="container view-usersettings">
    <Title title="ユーザー設定" />
    <UserSettings />
    <Modals />
  </div>
</template>

<script>
import UserSettings from "@/components/UserSettings.vue"
import Title from "@/components/Title.vue"
import Modals from "@/components/Modals.vue"

export default {
  name: "UserSettingsPage",
  components: {
    UserSettings,
    Title,
    Modals
  }
}
</script>

<style scoped>
</style>