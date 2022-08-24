<template>
  <div id="ElectronicImport">
    <!--  出口业务-->
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
import url from "@/assets/img/breadImg/chuko.jpg"

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: '出口业务',
    en: 'Export business'
  }
}
const BreadNavigationData = {
  title: {
    cn: "出口业务",
    en: "Export business"
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/exportBusiness",
      cn: "出口业务",
      en: "ExportBusiness"
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
  getExport()
})

function getExport(){
  allInterfaces.export().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getExport()
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