<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-articles')"
      :mode="storedArtiButtonMode"
      >All Articles</base-button
    >
    <base-button
      @click="setSelectedTab('add-article')"
      :mode="addArtiButtonMode"
      >Add Article</base-button
    >
  </base-card>
 <keep-alive>
    <component :is="selectedTab"></component>
 </keep-alive>
</template>

<script>
import StoredArticles from "./StoredArticles.vue";
import AddArticle from "./AddArticle.vue";

export default {
  components: {
    StoredArticles,
    AddArticle,
  },
  data() {
    return {
      selectedTab: "stored-articles",
       userArticles: [
        {
          id: 1,
          name: "user1",
          title:'article1',
          content: "我是文章一",
          isFavorite: false,
        },
        {
          id: 2,
          name: "user2",
           title:'article2',
          content: "我是文章二",
          isFavorite: true,
        },
        {
          id: 3,
          name: "user3",
           title:'article3',
          content: "我是文章三",
          isFavorite: false,
        },
      ],
    };
  },
  provide() {
    return {
      addArticle: this.addArticle,
      userArticles:this.userArticles,
      setFavoriteState:this.setFavoriteState,
    };
  },
  computed: {
    storedArtiButtonMode() {
      return this.selectedTab == "stored-articles" ? null : "flat";
    },
    addArtiButtonMode() {
      return this.selectedTab == "add-article" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
      setFavoriteState(favId) {
      const thisArticles = this.userArticles.find((arti) => arti.id == favId);
      thisArticles.isFavorite = !thisArticles.isFavorite;
    },
    addArticle(name, title, content) {
      const newArticle = {
        id: new Date().toISOString(),
        name: name,
        title: title,
        content: content,
        isFavorite: false,
      };
      this.userArticles.unshift(newArticle);
       this.selectedTab = 'stored-articles';
      
    },
  },
};
</script>