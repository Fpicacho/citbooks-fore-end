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
      cn: "首页",
      en: "Home"
    },
    {
      link: "/newsImport",
      cn: "报刊进口",
      en: "NewspaperImport"
    },
  ],
  describe: {
    cn: "",
    en: ""
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
<style>
@media only screen and (max-width: 770px) {
  img{
    width: 100%;
  }
}
</style>