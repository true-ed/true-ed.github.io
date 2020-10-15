<template lang="html">
  <svg
    class="svg"
    data-rellax-speed="6"
    viewBox="0 0 523 347"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    style="fill-rule: evenodd; clip-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 3; transform: translate3d(0px, 0px, 0px);"
  >
    <g transform="matrix(2.3882,0,0,2.3882,-2842.47,-1088.61)">
      <g transform="matrix(1,0,0,1,14.4568,7.50158)">
        <path
          d="M1381.71,561.518L1381.71,582.685"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></path>
      </g>
      <g
        transform="matrix(-0.788349,-9.65449e-17,9.65449e-17,-0.788349,2324.03,868.642)"
      >
        <path
          d="M1431.99,519.547L1176.97,519.547L1188.2,452.202L1256.78,452.202L1256.78,384.856L1409.54,384.856L1431.99,519.547Z"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></path>
      </g>
      <g
        transform="matrix(-0.572494,-7.01103e-17,7.01103e-17,-0.572494,2042.45,771.031)"
      >
        <path
          d="M1256.78,384.856L1409.54,384.856L1431.99,519.547L1176.97,519.547L1184.78,472.673"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></path>
      </g>
      <g transform="matrix(0.839653,0,0,0.839653,200.11,83.133)">
        <path
          d="M1304.75,565.24L1324.07,603.885L1285.42,603.885L1304.75,565.24Z"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></path>
      </g>
      <path
        d="M1396.16,512.149L1333.25,512.149L1333.25,597.689L1381.71,597.689L1381.71,561.518L1396.16,561.518L1396.16,512.149Z"
        style="fill:none;stroke:white;stroke-width:3px;"
      ></path>
      <g transform="matrix(0.649213,0,0,0.649213,478.721,194.658)">
        <path
          d="M1396.16,544.945L1396.16,512.149L1333.25,512.149L1333.25,597.689L1373.1,597.258"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></path>
      </g>
      <g transform="matrix(1,0,0,1,2.61999,0)">
        <rect
          x="1379.09"
          y="561.518"
          width="22.588"
          height="36.171"
          style="fill:none;stroke:white;stroke-width:3px;"
        ></rect>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.svg {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  -webkit-animation: section-svg 5s cubic-bezier(0.2, 0.7, 0.7, 0.2) infinite;
  animation: section-svg 5s cubic-bezier(0.2, 0.7, 0.7, 0.2) infinite;
}

@keyframes section-svg {
  from {
    stroke-dashoffset: 400;
  }
  to {
    stroke-dashoffset: -400;
  }
}
</style>
