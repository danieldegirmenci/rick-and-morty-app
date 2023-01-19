<template>
    <DetailPage />
</template>

<script>
// @ is an alias to /src
import DetailPage from '@/components/DetailPage.vue'

export default {
 
   data(){
    return {
      //Burayı 
     charID:this.$route.params.characterID,
   }
   },
   
  name: 'DetailView',
  components: {
    DetailPage
  }
}
</script>
<style>
</style>