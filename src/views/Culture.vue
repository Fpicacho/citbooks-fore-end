<template>
<div id="Culture">
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <div class="text">
      <img src="../assets/img/time.jpg" alt="">
      <p>卓越服务：</p>
      <p style="color:#666">1、遍布全省10几家分公司及全国近百家供应商，加之严谨的供应商管控体系，让您体验全国如一的品质服务和快速响应。<br>2、针对不同企业的个性化需求，度身定制灵活的综合解决方案并加以科学实施。 </p>
      <p>领先平台：</p>
      <p style="color:#666">1、独创的“无忧一站”人力资源服务系统平台是我们的强大驱动内核，联通人力凝聚了经过10年的行业经验及大数据的积累，结合人力资源SaaS的特殊性，实现互联网+人力资源的完美融合。<br>2、率先应用基于云计算的SaaS服务，提供标准化的服务运营和透明及时的服务体验。</p>
    </div>
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
  .text{
    img{
      width: 100%;
    }
  }
}
</style>