<template>
  <!--组织结构 src/views/IntroductionView.vue-->
  <div id="Introduction">
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <p>1230000</p>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import RunBanner from '@/components/RunBanner'

const RunBannerData = {
  url:'http://www.chinawanda.com/static/images/tx_banner.jpg',
  title:{
    cn:'公司简介',
    en:'Company Profile'
  }
}
</script>

<style scoped lang="scss">
.container{
  width: 80%;
  margin: 0 auto;
}
</style>