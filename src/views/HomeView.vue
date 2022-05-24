<template>
  <div class="home">
    <Banner/>
    <BusinessList/>
    <NewsList/>
<!--    <div class="clear"/>-->
    <ToggleList/>
  </div>
</template>

<style scoped lang="scss">
.home{
  background: #fff;
}
.clear{
  display: none;
}
@media only screen and (min-width: 770px)  {
  .home{
    background: #f2f3f4;
  }
  //#NewsList{
  //  position: absolute;
  //  top: 760px;
  //  left: 50%;
  //  width: 80%;
  //  transform: translate(-50%, -50%);
  //}
  .clear{
    display: block;
    height: 220px;
  }
}
</style>

<script setup>
import Banner from '@/components/HomeView/Banner'
import NewsList from '@/components/HomeView/NewsList'
import BusinessList from '@/components/HomeView/BusinessList'
import ToggleList from '@/components/HomeView/ToggleList'
</script>
