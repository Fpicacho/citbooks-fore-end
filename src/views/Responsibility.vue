<template>
  <div id="Responsibility">
    <!--  社会党建责任-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <div v-html="container.const"></div>
    </div>
  </div>
</template>

<script setup>
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
import {reactive,onMounted,watch,computed} from 'vue'
import {useStore} from 'vuex'
import allInterfaces from "@/api/allInterfaces";
import img from "@/assets/img/breadImg/dangjian.jpg"
const store = useStore();

const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '社会和党建责任',
    en: 'Social and Party Building Responsibilities'
  }
}
const BreadNavigationData = {
  title: {
    cn: "社会和党建责任",
    en: "Social and Party Building Responsibilities"
  },
  navigation: [
    {
      link: "/",
      cn: "关于我们",
      en: "About us"
    },
    {
      link: "/responsibility",
      cn: "党建责任",
      en: "responsibility"
    },
  ],
  describe: {
    cn: "由于企业的生产经营与履行社会责任密切相关所以为了保证企业健康发展企业党组织还必须把履行社会责任作为企业党建的重要内容结合履行社会责任加强党建工作以抓好党建工作保证企业履行好社会责任...",
    en: "Since the production and operation of an enterprise is closely related to the fulfillment of social responsibility, in order to ensure the healthy development of the enterprise, the party organization of the enterprise must also take the fulfillment of social responsibility as an important part of the party building of the enterprise, combined with the fulfillment of social responsibility and strengthen the party building work to ensure that the enterprise fulfills its social responsibility well"
  }
}

let container = reactive({const:""})
onMounted(()=>{
  getResponsibility()
})

function getResponsibility(){
  allInterfaces.responsibility().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getResponsibility()
});
// 语言切换监听end
</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>