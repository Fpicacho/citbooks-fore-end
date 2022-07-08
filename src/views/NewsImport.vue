<template>
  <div id="NewsImport">
    <!--  报刊进口-->
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
import url from '@/assets/img/breadImg/baokan.jpg'

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: '报刊进口',
    en: 'Newspaper import'
  }
}
const BreadNavigationData = {
  title: {
    cn: "报刊进口",
    en: "Newspaper import"
  },
  navigation: [
    {
      link: "/",
      cn: "公司业务",
      en: "Business"
    },
    {
      link: "/newsImport",
      cn: "报刊进口",
      en: "NewspaperImport"
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
  getJournal()
})

function getJournal(){
  allInterfaces.journal().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getJournal()
});
// 语言切换监听end

</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>