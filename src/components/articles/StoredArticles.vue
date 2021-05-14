<template>
  <ul>
    <article-list
      v-for="arti in userArticles"
      :key="arti.id"
       :id="arti.id"
      :name="arti.name"
      :title="arti.title"
      :content="arti.content"
      :isFavorite="arti.isFavorite"
      @isFavoriteState="setFavoriteState"
    ></article-list>
  </ul>
</template>
<script>
import ArticleList from "./ArticleList.vue";
export default {
  inject:['userArticles','setFavoriteState'],
  components: {
    ArticleList,
  },
 
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>