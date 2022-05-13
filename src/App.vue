<template>
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link>-->
  <!--    |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <router-view/>
</template>

<style lang="scss">

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

#app {
  font-size: 0.16rem;
  color: #333333;
}
</style>
<script setup>

</script>