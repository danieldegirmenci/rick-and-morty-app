<template>
  <DetailPage />
</template>

<script>
import DetailPage from "@/components/DetailPage.vue";

export default {
  data() {
    return {
      charID: this.$route.params.characterID,
    };
  },

  name: "DetailView",
  components: {
    DetailPage,
  },
};
</script>
<style></style>
