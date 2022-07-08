<template>
  <div class="container">
    <div v-html="container.const"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import {reactive,onMounted,watch,computed} from 'vue'
import {useStore} from 'vuex'
import allInterfaces from "@/api/allInterfaces";
const route = useRoute();
const store = useStore();
let container = reactive({const:""})
onMounted(() => {
  getEnterpriseContainer()
})
function getEnterpriseContainer(){
  allInterfaces.enterpriseContainer({id:route.query.id}).then(res=>{
    container.const = res.data.data[0].content
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