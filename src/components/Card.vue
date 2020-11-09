<template lang="pug">
  .card__wrapper(
    :class=`{
      'card__wrapper_active': active_image != 0
    }`
  )
    .card(
      :class=`{
        "card_active": active_image != 0
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
            active_image == 0 ? 
              (() =>{
                active_image = index + 1
                galleryBackground(true)
              })()
              : (() =>{
                if(active_image == index + 1){
                  active_image = 0
                  galleryBackground(false)
                }else{
                  active_image = index + 1
                }
              })()
          `
          :class=`{
            "card__gallery-image-wrapper_active": active_image == (index + 1)
          }`
        )
          img.card__gallery-image(
            :src="src"
          )
      .card__text(
        v-html="text"
      )
      .card__tags
        .card__tag(
          v-for="tag in tags"
        ) {{tag}}
      a.card__button(
        v-if="demo != ''"
        :href="demo"
      ) Demo &#8594;
      a.card__button(
        v-if="code != ''"
        :href="code"
        target="_blank"
      ) Code &#8594;
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
    },
    demo: {
      default: "",
      type: String
    },
    code: {
      default: "",
      type: String
    }
  },
})
export default class App extends Vue {
  active_image = 0;
}
</script>

<style lang="scss" scoped></style>
