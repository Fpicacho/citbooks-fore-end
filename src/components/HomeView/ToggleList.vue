<template>
<div id="PartnerList">
  <div class="container">
    <div class="titleBox">
      <h1 style="color:#298dff" class="wow bounceInLeft">{{$t('ToggleList.title[0]')}}</h1>
      <p style="color:#919191" class="wow bounceInRight">{{$t('ToggleList.title[1]')}}</p>
    </div>
    <n-tabs type="segment" class="wow bounceInLeft">
      <n-tab-pane name="chap1" :tab="$t('ToggleList.bar[0]')">
        <ListAboutUs/>
      </n-tab-pane>
      <n-tab-pane name="chap2" :tab="$t('ToggleList.bar[1]')">
        <ListPartner/>
      </n-tab-pane>
      <n-tab-pane name="chap3" :tab="$t('ToggleList.bar[2]')">
        <ListResponsibility/>
      </n-tab-pane>
    </n-tabs>
  </div>
</div>
</template>

<script setup>
import ListAboutUs from '@/components/HomeView/ToggleList/List-AboutUs'
import ListPartner from '@/components/HomeView/ToggleList/List-Partner'
import ListResponsibility from '@/components/HomeView/ToggleList/List-Responsibility'
</script>

<style scoped lang="scss">
#PartnerList{
  background: #fff;
  padding: 16px 16px;
}
.titleBox{
  display: none;
}
@media only screen and (min-width: 770px)  {
  .container{
    width: 80%;
    margin: 0 auto;
    .titleBox{
      display: block;
      text-align: center;
    }
  }

}
</style>