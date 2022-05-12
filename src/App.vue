<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <ChangeLanguageBtn/>
  <router-view/>
</template>

<style lang="scss">
#app {}


</style>
<script setup>
import ChangeLanguageBtn from './components/ChangeLanguageBtn'

</script>