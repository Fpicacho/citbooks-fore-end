<template>
  <!--全局导航-->
  <Nav/>
  <!--路由出口-->
  <router-view/>
  <!--全局页脚&版权信息-->
  <div class="fooferBox">
    <Footer :footerData="footerData"/>
    <Copyright :footerData="footerData"/>
  </div>
</template>

<style lang="scss">
//基本的响应式查询 374以下兼容phone4s小屏幕系列产品 374px~769px兼容市面主流移动手机物理像素 770px及以上视为大屏幕显示器以pc样式为准
@media only screen and (max-width: 374px) {
  html {
    font-size: 86px;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  html {
    font-size: 100px;
  }
}

@media only screen and (min-width: 770px) {
  html {
    font-size: 110px;
  }
}

// 关于全局的样式重写与全局组件定位
body {
  margin: 0;
  padding: 0;
  #app {
    font-size: 0.16rem;
    color: #333333;
    #Navv{
      position:sticky;
      top: 0;
      background: #fff;
      z-index: 2;
    }
  }
  ul,li{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
}
</style>
<script setup>
// 引入组件
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Copyright from '@/components/Copyright'
import allInterfaces from "@/api/allInterfaces";
import { onMounted,reactive } from 'vue'


// 全局滚动动画方法基本配置
import WOW from "wow.js";
let wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true
});
wow.init();
const footerData = reactive({
  data:""
})
onMounted(() => {
  window.localStorage.setItem("LanguageState", "ch");
  allInterfaces.WebInfo().then(res=>{
    footerData.data = res.data.data
  })
})

</script>