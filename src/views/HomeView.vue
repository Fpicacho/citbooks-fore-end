<template>
  <div class="home">
    <Banner/>
    <NewsList/>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (min-width: 414px)  {
  #NewsList{
    position: absolute;
    top: 750px;
    left: 50%;
    width: 1492px;
    transform: translate(-50%, -50%);
  }
}
</style>

<script setup>
import Banner from '@/components/HomeView/Banner'
import NewsList from '@/components/HomeView/NewsList'
</script>
