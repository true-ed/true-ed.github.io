<template lang="pug">
  .card(
    :class=`{
      "card_active": slide != 0
    }`
  )
    .card__title {{title}}
    .card__gallery(
      v-if="images.length > 0"
    )
      .card__gallery-image-wrapper(
        v-for="(src, index) in images"
        tabindex="1"
        @click=`
          slide == 0 ? 
            (() =>{
              slide = index + 1
              galleryBackground(true)
            })()
            : (() =>{
              if(slide == index + 1){
                slide = 0
                galleryBackground(false)
              }else{
                slide = index + 1
              }
            })()
        `
        :class=`{
          "card__gallery-image-wrapper_active": slide == (index + 1)
        }`
      )
        img.card__gallery-image(
          :src="src"
        )
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
    tags: Array,
    images: {
      default: () => [],
      type: Array
    },
    galleryBackground: {
      default: () =>{},
      type: Function
    }
  },
})
export default class App extends Vue {
  slide = 0;
}
</script>

<style lang="scss" scoped></style>
