<template lang="pug">
  .card
    .card__title {{title}}
    .card__text {{text}}
    .card__tags
      .card__tag(
        v-for="tag in tags"
      ) {{tag}}
    button.card__button(
      type="button"
    ) Open source &#8594;
    button.card__button(
      type="button"
    ) Gallery &#8594;
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    title: String,
    text: String,
    tags: Array
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
