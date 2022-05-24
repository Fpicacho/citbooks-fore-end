<template>
<div id="PartnerList">
  <div class="container">
    <div class="titleBox">
      <h1 style="color:#298dff">携手共赢，与全球合作伙伴共建图书馆藏新时代</h1>
      <p style="color:#919191">中科公司愿与境外出版社、国内高等学校图书馆、研究院文献中心、公共图书馆等其他机构精诚合作、携手共赢，共同探讨新时代下的图书馆藏建设。</p>
    </div>
    <n-tabs type="segment">
      <n-tab-pane name="chap1" tab="关于我们">
        <ListAboutUs/>
      </n-tab-pane>
      <n-tab-pane name="chap2" tab="合作伙伴">
        <ListPartner/>
      </n-tab-pane>
      <n-tab-pane name="chap3" tab="党建和社会责任">
        <ListResponsibility/>
      </n-tab-pane>
    </n-tabs>
  </div>
</div>
</template>

<script setup>
import ListAboutUs from '@/components/HomeView/BusinessList/List-AboutUs'
import ListPartner from '@/components/HomeView/BusinessList/List-Partner'
import ListResponsibility from '@/components/HomeView/BusinessList/List-Responsibility'
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