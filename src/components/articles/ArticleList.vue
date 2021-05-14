<template>
  <li>
    <base-card>
      <!-- <p>{{id}}</p> -->
      <h3>{{ name }}</h3>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
      <base-button
        :mode="isFavorite == true ? null : 'flat'"
        @click="setFavorite"
        >love</base-button
      >
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "name", "content", "isFavorite"],
  emits: ["isFavoriteState"],
  methods: {
    setFavorite() {
      this.$emit("isFavoriteState", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  margin: auto;
  max-width: 40rem;
}
</style>