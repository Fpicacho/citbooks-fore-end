<template>
 <div id="Responsibility">
   <div v-html="container.const"></div>
 </div>
</template>

<script setup>
import {reactive,onMounted,watch,computed} from 'vue'
import {useStore} from 'vuex'
import allInterfaces from "@/api/allInterfaces";
let container = reactive({const:""})
const store = useStore();
onMounted(()=>{
  getResponsibility()
})

function getResponsibility(){
  allInterfaces.responsibility().then(res=>{
    container.const = res.data.container
  })
}

// 语言切换监听
const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
watch(getLanguageState, (newVal) => {
  // 发送newVal 以告知服务端需要什么版本的文章
  getResponsibility()
});
// 语言切换监听end
</script>

<style scoped>

</style>