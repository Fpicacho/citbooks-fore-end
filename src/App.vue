<template>
  <Nav/>
  <router-view/>
  <Footer/>
  <Copyright/>
</template>

<style lang="scss">

@media only screen and (max-width: 374px) {
  html {
    font-size: 86px;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  html {
    font-size: 100px;
  }
}

@media only screen and (min-width: 770px) {
  html {
    font-size: 110px;
  }
}

body {
  margin: 0;
  padding: 0;
  #app {
    font-size: 0.16rem;
    color: #333333;
    #Nav{
      position:sticky;
      top: 0;
      background: #fff;
      z-index: 2;
    }
  }
  ul,li{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
}
</style>
<script setup>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Copyright from '@/components/Copyright'
</script>