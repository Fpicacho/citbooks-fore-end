<template>
<div id="Culture">
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
  </div>
</div>
</template>

<script setup>
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
const RunBannerData = {
  imgUrl: 'http://www.chinawanda.com/static/images/tx_banner.jpg',
  title: {
    cn: '公司文化',
    en: 'Company Culture'
  }
}
const BreadNavigationData={
  title:{
    cn:"公司文化",
    en:"Company Culture"
  },
  navigation:[
    {
      link:"/",
      cn:"关于我们",
      en:"About us"
    },
    {
      link:"/culture",
      cn:"公司文化",
      en:"Company Culture"
    },
  ],
  describe:{
    cn:"创新 诚信 服务 求实",
    en:"Innovation Integrity Service Realistic"
  }
}
</script>

<style scoped lang="scss">
#Culture{
  .container{
    width: 75%;
    margin: 20px auto;
  }
}
</style>