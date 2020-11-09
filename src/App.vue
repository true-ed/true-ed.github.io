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
      .card__grid
        .card__gallery-background(
          :class="{'card__gallery-background_active': card__galleryBackground}"
        )
        Card(
          :class=`{
            'card__wrapper_disabled': card__galleryBackground
          }`
          title="Minimino"
          :images="[require('@/assets/portfolio/minimino/minimino.png'), require('@/assets/portfolio/minimino/minimino-1.png'), require('@/assets/portfolio/minimino/minimino-2.png')]"
          text="Minimalistic, light, fresh and responsive mobile app website"
          :tags=['ES6', 'Node JS', 'Webpack', 'Vue', 'Scss']
          :galleryBackground="(activate) => { card__galleryBackground = activate }"
          demo="#"
        )
        Card(
          :class=`{
            'card__wrapper_disabled': card__galleryBackground
          }`
          title="Neural Network"
          text="Scalable code of Neural Network (Perceptron).  The neural network layer class was written in <b>C++</b> and <b>JavaScript</b> (node js). Layers of Neurons can be combined in any way that allows you to experimentalize."
          :tags=['C++', 'JavaScript']
          :galleryBackground="(activate) => { card__galleryBackground = activate }"
          code="https://github.com/true-ed/neural-network"
        )
    .footer(
      style="margin-top: 500px;"
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
  card__galleryBackground = false;
}
</script>

<style lang="scss">
  @import "@/stylesheets/main.scss";
</style>