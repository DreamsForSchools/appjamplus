<template>
  <article v-html="renderedContent"></article>
</template>

<script>
import showdown from "showdown";
export default {
  name: "BaseArticle",
  props: {
    content: String
  },
  computed: {
    renderedContent() {
      const vm = this;
      const converter = new showdown.Converter();
      return converter.makeHtml(vm.content);
    }
  }
};
</script>

<style scoped></style>
