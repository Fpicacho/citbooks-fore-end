<template>
  <div id="Introduction">
    <RunBanner :data="RunBannerData"/>
    <p>123000</p>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import RunBanner from '@/components/RunBanner'

const RunBannerData = {url:'http://www.chinawanda.com/static/images/tx_banner.jpg',title:'公司简介'}
</script>

<style scoped lang="scss">

</style>