<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #ca90ad;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    margin: 0;
  }
}
</style>