<template>
  <!--招聘信息详情-->
  <div id="RecruitmentContainer" style="min-height: 500px">
    <div class="container">
      <BreadNavigation :data="BreadNavigationData"/>
      <div v-html="container.const"></div>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted} from 'vue'
import {useRoute} from "vue-router";
import allInterfaces from "@/api/allInterfaces";
import BreadNavigation from '@/components/BreadNavigation'

const route = useRoute();
let container = reactive({const: ""})

const BreadNavigationData = {
  title: {
    cn: "招聘信息",
    en: "Recruitment"
  },
  navigation: [
    {
      link:"/",
      cn:"首页",
      en:"Home"
    },
    {
      link: "/recruitment",
      cn: "招聘信息",
      en: "recruitment"
    },
    {
      link: window.location.hash,
      cn: "岗位详情",
      en: "recruitment"
    },
  ],
  describe: {
    cn: "",
    en: ""
  }
}

onMounted(() => {
  allInterfaces.recruitContainer({id: route.query.id}).then(res => {
    container.const = res.data.data.content
  })
})

</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 20px auto;
}
</style>