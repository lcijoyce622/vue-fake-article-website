<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="inputTitle" />
      </div>
      <div class="form-control">
        <label for="content">Content</label>
        <textarea rows="10" name="content" v-model="inputContent"></textarea>
      </div>
      <base-button>Add Article</base-button>
    </form></base-card
  >
</template>
<script>
export default {
  inject: ["addArticle"],
  data() {
    return {
      inputTitle: "",
      inputContent: "",
    };
  },
  methods: {
    submitData() {
      this.addArticle("unsetUser", this.inputTitle, this.inputContent);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-control {
  margin: 1rem 0;
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }
}
</style>