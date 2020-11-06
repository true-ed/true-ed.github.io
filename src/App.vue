<template lang="pug">
  div#app(
    ref="root"
  )
    div.header
      div.adaptive
        div.header__logo Edward Prykhozhay • PORTFOLIO
        div.header__nav
        div.header__bg-word(
          v-rellax="{speed: 2}"
        )
          | PORTFOLIO
        div.header__text
          div.header__text-title(
          v-rellax="{speed: 1}"
        )
            | FRONT-END DEVELOPER
          div.header__text-paragraph(
          v-rellax="{speed: 0.5}"
        )
            | Only enthusiasm, work and desire to bring something worthwhile to this world.
        div.header__animated-svg(
          v-rellax="{speed: 4}"
        )
          AnimatedSVG
        div.mouse.header__mouse(
          v-rellax="{speed: 0.5}"
        )
        div.header__socials
          a.header__socials-link(
            href='#'
          )
            i.fab.fa-telegram
          a.header__socials-link(
            href='#'
          )
            i.fab.fa-github-alt
          a.header__socials-link(
            href='#'
          )
            i.fab.fa-linkedin
    .adaptive
      Card(
        title="Bilinimo"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        :tags=['node js', 'webpack', 'vue', 'vuex', 'vue routing']
      )
    .footer(
      style="margin-top: 50px;"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import AnimatedSVG from '@/components/AnimatedSVG.vue'
import Card from '@/components/Card.vue'

@Component({
  components: {
    AnimatedSVG,
    Card
  },
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
  @import "@/stylesheets/main.scss";
</style>