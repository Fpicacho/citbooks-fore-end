<template>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <h1 style="text-align: center">{{ container.const.title }}</h1>
    <div v-html="container.const.content"></div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {reactive, onMounted, watch, computed} from 'vue'
import {useStore} from 'vuex'
import allInterfaces from "@/api/allInterfaces";
import BreadNavigation from '@/components/BreadNavigation';

const route = useRoute();
const store = useStore();
let container = reactive({const: ""})
const BreadNavigationData = {
  title: {
    cn: '',
    en: ''
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home"
    },
    {
      link: "/enterpriseList",
      cn: "企业动态",
      en: "Entreprise's news"
    },{
      link: window.location.hash,
      cn: "文章详情",
      en: "Article details"
    }
    ],
  describe: {
    cn: "",
    en: ""
  }
}
onMounted(() => {
  getEnterpriseContainer()
})
function getEnterpriseContainer() {
  allInterfaces.enterpriseContainer({id: route.query.id}).then(res => {
    container.const = res.data.data[0]
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getEnterpriseContainer()
});
// 语言切换监听end
</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>