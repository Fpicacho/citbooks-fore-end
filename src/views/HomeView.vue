<template>
  <div class="home">
      <Slogan/>
      <Banner/>
      <BusinessList/>
      <NewsList/>
      <ToggleList/>
  </div>
</template>

<style scoped lang="scss">
.home {
  background: #fff;
}

.clear {
  display: none;
}

@media only screen and (min-width: 770px) {
  .home {
    background: #f2f3f4;
  }
}
</style>

<script setup>
import Banner from '@/components/HomeView/Banner'
import NewsList from '@/components/HomeView/NewsList'
import BusinessList from '@/components/HomeView/BusinessList'
import ToggleList from '@/components/HomeView/ToggleList'
import Slogan from "@/components/HomeView/Slogan";
</script>
