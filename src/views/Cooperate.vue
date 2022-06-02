<template>
<div id="Cooperate">
  <!--  合作伙伴-->
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
    cn: '合作伙伴',
    en: 'Partner'
  }
}
const BreadNavigationData={
  title:{
    cn:"合作伙伴",
    en:"Partner"
  },
  navigation:[
    {
      link:"/",
      cn:"关于我们",
      en:"About us"
    },
    {
      link:"/cooperate",
      cn:"合作伙伴",
      en:"Partner"
    },
  ],
  describe:{
    cn:"随着公司不断地发展，中国科技资料进出口总公司的优质服务已延伸到更加宽广的领域， 我们获得了众多来自各行业企业的合作，以下展示部分合作伙伴的LOGO(排名不分先后):",
    en:"With the continuous development of the company, the high-quality service of China National Science and Technology Materials Import and Export Corporation has been extended to a wider field. We have obtained cooperation from many enterprises in various industries. The following shows the LOGO of some partners (in no particular order):"
  }
}
</script>

<style scoped lang="scss">
#Cooperate{
  .container{
    width: 75%;
    margin: 0 auto;
  }
}
</style>