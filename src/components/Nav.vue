<template>
  <div id="Nav">
    <div class="logo">
      <img src="" alt="">
    </div>
    <div class="navList"></div>
  </div>
</template>

<script setup>
export default {
  name: "Nav"
}
</script>

<style scoped>
@media only screen and (max-width: 374px) {
  html {
    font-size: 86px;
  }
}

@media only screen and (min-width: 374px) and (max-width: 413px) {
  html {
    font-size: 100px;

  }

  @media only screen and (min-width: 414px) {
    html {
      font-size: 110px;
    }
  }
</style>