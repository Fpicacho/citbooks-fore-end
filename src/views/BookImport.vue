<template>
  <div id="ElectronicImport">
    <!--  原版图书进口-->
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
import img from '@/assets/img/breadImg/yuanbantushujinko.jpg'

const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '原版图书进口',
    en: 'Import of original books'
  }
}
const BreadNavigationData = {
  title: {
    cn: "原版图书进口",
    en: "Import of original books"
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/electronicImport",
      cn: "原版图书进口",
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
  getOriginal()
})

function getOriginal(){
  allInterfaces.original().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getOriginal()
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
