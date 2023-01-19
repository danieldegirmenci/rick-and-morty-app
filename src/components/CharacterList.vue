<template>
  <button @click="previousPage" class="previousTop button">Previous Page</button>
  <button @click="nextPage" class="nextTop button">Next Page</button>

  <div class="containerCard" v-if="result">
    <div class="cardOuter" v-for="character in result.characters.results" :key="character.id">
      <div class="card">
        <img :src="character.image" class="card-img-top" alt="Character Image">
        <div class="card-body" style="background-color:#64c09b; color:#011307;">
          <h5 class="card-title" >
            {{ character.name }}</h5>

        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Species: {{ character.species }}</li>
          <li class="list-group-item">Gender: {{ character.gender }}</li>
          
        </ul>

      </div>
      <router-link class="detailLink" :to="{
        name: 'detail',
        params: {
          characterID: character.id
        }
      }">More Details</router-link>
    </div>

  </div>
<div class="bottomButtons">
  <button @click="previousPage" class="previousBottom button">Previous Page</button>
  <button @click="nextPage" class="nextBottom button">Next Page</button>
</div>
</template>

<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { reactive } from 'vue'

const CHARACTERS_QUERY = gql`
 query Characters($page:Int) {
   characters(page:$page) {
     results {
       id
       name
       image
       gender
       species
     }
   }
 }
`
const variables = reactive({
  page: 1,
})
export default {
  //  name: 'CharacterList',
  methods: {
    nextPage() {
      if (variables.page < 42) {
        variables.page++;
      }
    },
    previousPage() {
      if (variables.page > 1) {
        variables.page--;
      }
    }
  },

  setup() {

    const { result, loading } = useQuery(CHARACTERS_QUERY, variables);
    return {
      result,
      loading,


    }
  }
}

</script>

<style scoped>
.button {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  background-color: #64c09b;
  min-width: 105px;
  width: 15%;
  height: 50px;
  border-radius: 10px;
  color: #001736;
  border: none;
}
.button:active{
  border: 1px solid #64c09b;
  background-color: #001736;
  color: #64c09b;
}
.button:hover,
.detailLink:hover {
  box-shadow: 1px 1px 25px 0px rgba(100, 192, 155, 0.6);
  transition: 0.2s;

}

.nextTop {
  right: 30px;
}

.previousTop {
  min-width: 170px;
  left: 30px;

}
.nextBottom{
  right: 30px;
}
.previousBottom{
  min-width: 170px;
  left: 30px;
}
.bottomButtons{
  height: 150px;
  margin-top: 190px;
  position: relative;
display: block;
}

.containerCard {
  position: relative;
  top: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.card-title{
 background-color:#64c09b;
color:#001736;
 text-align: center;
  font-weight: 700;
}

li {
  text-align: center;
  background-color: #64c09b;
  color: #001736;
  height: 50px;
  border-top: 0.5px solid #001736 !important;
  height: auto;
  overflow-y: auto;
}

.detailLink {
  color: #64c09b;
  text-decoration: none;
  position: relative;
  left: 25%;
  padding: 15px 40px;

  border: 2px solid #64c09b;
  border-radius: 10px;
}

.detailLink:active {
  background-color: #64c09b;
  color: #001736;
}

.card {
  width: 18rem;
  margin: 35px;
  border: none;
  box-shadow: 1px 1px 15px 0px rgba(100, 192, 155, 0.6);
}



</style>