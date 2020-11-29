<template>
  <div class="container view-linelink">
    <Title title="LINEアカウント連携" />
    <LineLink />
    <Modals />
  </div>
</template>

<script>
import LineLink from "@/components/LineLink.vue"
import Title from "@/components/Title.vue"
import Modals from "@/components/Modals.vue"

export default {
  name: "LineLinkPage",
  components: {
    LineLink,
    Title,
    Modals
  }
};
</script>