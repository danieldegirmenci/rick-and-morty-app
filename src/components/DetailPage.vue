<template>
  <div v-if="result">
    <router-link to="/" class="backButton">Back</router-link>

    <div class="allInfo">
      <div class="headInfo">
        <div class="name">{{ result.character.name }}</div>
        <img :src="result.character.image" alt="Character" class="img-fluid" />
      </div>

      <div class="subInfo">
        <div class="key-value">
          <span>Character ID : </span>
          <span>{{ $route.params.characterID }}</span>
        </div>
        <div class="key-value">
          <span>Status : </span> <span>{{ result.character.status }}</span>
        </div>
        <div class="key-value">
          <span>Gender : </span> <span>{{ result.character.gender }}</span>
        </div>
        <div class="key-value">
          <span>Species : </span> <span>{{ result.character.species }}</span>
        </div>
        <div class="key-value">
          <span>Origin : </span> <span>{{ result.character.origin.name }}</span>
        </div>
        <div class="key-value">
          <span>Last seen : </span>
          <span>{{ result.character.location.name }}</span>
        </div>
        <div class="key-value">
          <span>First Episode : </span>
          <span>{{ result.character.episode[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { reactive } from "vue";
import { useRoute } from "vue-router";
const DETAIL_QUERY = gql`
  query Characters($id: ID!) {
    character(id: $id) {
      name
      image
      status
      gender
      species
      origin {
        name
      }
      episode {
        name
      }
      location {
        name
      }
    }
  }
`;

export default {
  setup() {
    const { result, loading } = useQuery(
      DETAIL_QUERY,
      reactive({
        id: useRoute().params.characterID,
      })
    );
    return {
      result,
      loading,
    };
  },
};
</script>
<style scoped>
.allInfo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.headInfo {
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
}

.backButton {
  position: relative;
  left: 5%;
  align-self: flex-start;
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #64c09b;
  min-width: 20%;
  height: auto;
  padding: 15px 30px;
  border-radius: 10px;
  color: #001736;
  border: none;
}

.name {
  margin: 10%;
  color: #64c09b;
  font-size: 40px;
  font-weight: bolder;
  text-shadow: 1px 1px 15px rgba(100, 192, 155, 0.6);
}

img {
  margin-right: 10%;
  border-radius: 15px;
  box-shadow: 1px 1px 15px 0px rgba(100, 192, 155, 0.6);
}

.subInfo {
  align-self: center;
  padding: 80px;
  height: max-content;
  max-width: max-content;
  border: 1px solid #64c09b;
  box-shadow: 1px 1px 25px 0px rgba(100, 192, 155, 0.6);

  font-weight: 900;
  font-size: x-large;
  margin-top: 50px;
  color: #64c09b;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.key-value {
  margin: 10px;
}

.backButton:active {
  border: 1px solid #64c09b;
  background-color: #001736;
  color: #64c09b;
}

.backButton:hover {
  box-shadow: 1px 1px 25px 0px rgba(100, 192, 155, 0.6);
  transition: 0.2s;
}
</style>
