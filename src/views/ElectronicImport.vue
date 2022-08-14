<template>
  <div id="ElectronicImport">
    <!--  电子资源进口-->
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
import img from '@/assets/img/breadImg/dianziziyuanjinko.jpg'

const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '电子资源进口',
    en: 'Import of electronic resources'
  }
}
const BreadNavigationData = {
  title: {
    cn: "电子资源进口",
    en: "Import of electronic resources"
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/electronicImport",
      cn: "电子资源进口",
      en: "ElectronicImport"
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
  getElectronics()
})

function getElectronics(){
  allInterfaces.electronics().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getElectronics()
});
// 语言切换监听end
</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>