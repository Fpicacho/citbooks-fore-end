<template>
  <div id="ElectronicImport">
    <!--  专业研究-->
    <RunBanner :data="RunBannerData"/>
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <div v-html="container.const" class="htmlDoc"></div>
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
    cn: "",
    en: ""
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
<style lang="scss">
@media only screen and (max-width: 770px) {
  .htmlDoc {
    img {
      width: 100% !important;
    }
  }
}
</style>