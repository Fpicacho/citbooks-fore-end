<template>
  <div id="ElectronicImport">
    <!--  专业研究-->
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
import url from '@/assets/img/breadImg/zhuanyeyanjiu.jpg'

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: '专业研究',
    en: 'Professional Studies'
  }
}
const BreadNavigationData = {
  title: {
    cn: "专业研究",
    en: "Professional Studies"
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/professionalStudies",
      cn: "专业研究",
      en: "ElectronicImport"
    },
  ],
  describe: {
    cn: "由于企业的生产经营与履行社会责任密切相关所以为了保证企业健康发展企业党组织还必须把履行社会责任作为企业党建的重要内容结合履行社会责任加强党建工作以抓好党建工作保证企业履行好社会责任...",
    en: "Since the production and operation of an enterprise is closely related to the fulfillment of social responsibility, in order to ensure the healthy development of the enterprise, the party organization of the enterprise must also take the fulfillment of social responsibility as an important part of the party building of the enterprise, combined with the fulfillment of social responsibility and strengthen the party building work to ensure that the enterprise fulfills its social responsibility well"
  }
}
const store = useStore();

let container = reactive({const:""})
onMounted(()=>{
  getProfessional()
})

function getProfessional(){
  allInterfaces.professional().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getProfessional()
});
// 语言切换监听end
</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>