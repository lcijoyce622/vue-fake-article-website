<template>
<the-header title="Fake Articles App"></the-header>
<the-article></the-article>
</template>

<script>
import TheArticle from './components/articles/TheArticle.vue'
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components:{
    TheArticle,
    TheHeader
  },
 
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  font-family: "Roboto", sans-serif;
    margin: 0;
  body {
    margin: 0;
    // background-color: #2c3e50;
   
  }
}
</style>
