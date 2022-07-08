<template>
<div id="Culture">
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <div v-html="container.const">
    </div>
  </div>
</div>
</template>

<script setup>
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
import {reactive,onMounted,watch,computed} from 'vue'
import {useStore} from 'vuex'
import allInterfaces from '../api/allInterfaces'
import img from '@/assets/img/breadImg/gongsiwenhua.jpg'
const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '公司文化',
    en: 'Company Culture'
  }
}
const BreadNavigationData={
  title:{
    cn:"公司文化",
    en:"Company Culture"
  },
  navigation:[
    {
      link:"/",
      cn:"关于我们",
      en:"About us"
    },
    {
      link:"/culture",
      cn:"公司文化",
      en:"Company Culture"
    },
  ],
  describe:{
    cn:"创新 诚信 服务 求实",
    en:"Innovation Integrity Service Realistic"
  }
}
const store = useStore();
let container = reactive({const:""})
onMounted(()=>{
  getAllInterfaces()
})

function getAllInterfaces(){
  allInterfaces.corporate().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getAllInterfaces()
});
// 语言切换监听end

</script>

<style scoped lang="scss">
#Culture{
  .container{
    width: 75%;
    margin: 20px auto;
  }
  .text{
    img{
      width: 100%;
    }
  }
}
</style>