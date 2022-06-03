<template>
<div id="BreadNavigation" class="wow fadeIn">
<!--  面包导航-->
  <div class="titleBox">
    <h1>{{componentsData.title}}</h1>
    <n-breadcrumb>
      <span>{{$t('currentPosition')}}&nbsp;&nbsp;</span>
      <n-breadcrumb-item v-for="(item,id) in componentsData.navigation" :key="id" :href="item.link">
        {{item.title}}
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
  <p class="describe">{{componentsData.describe}}</p>
</div>
</template>

<script setup>
import {reactive,defineProps,watch,computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const props = defineProps(['data'])
const componentsData = reactive({
  title:"",
  navigation:[],
  describe:""
})

const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
function changeLanguage(val){
  if(val === 'ch'){
    componentsData.title = props.data.title.cn
    let list = [];
    props.data.navigation.forEach(item=>{
      list.push({title:item.cn,link:item.link})
    })
    componentsData.navigation = list
    componentsData.describe = props.data.describe.cn
  }else{
    componentsData.title = props.data.title.en
    let list = [];
    props.data.navigation.forEach(item=>{
      list.push({title:item.en,link:item.link})
    })
    componentsData.navigation = list
    componentsData.describe = props.data.describe.en
  }
}
changeLanguage(store.state.LanguageState);
watch(getLanguageState, (newVal) => {
  changeLanguage(newVal)
});
</script>

<style scoped lang="scss">
#BreadNavigation{
  .titleBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cacfd5;
    span{
      font-size: 14px;
    }
  }
  .describe{
    font-size: 16px;
    color: #666;
  }
}
@media only screen and (max-width: 770px){
  #BreadNavigation{
    margin-top: 20px;
    .titleBox{
      display: flex;
      justify-content: end;
      h1{
        display: none;
      }
    }
  }
}
</style>