<template>
  <div id="BreadNavigation" class="wow fadeIn">
    <!--  面包导航-->
    <div class="titleBox">
      <h1>{{ componentsData.title }}</h1>
      <div class="navList">
        <span>{{ $t('currentPosition') }}&nbsp;&nbsp;</span>
        <ul>
          <li v-for="(item,index) in componentsData.navigation" :key="index">
            <router-link :to="item.link">{{ item.title }}</router-link>
            <span v-if="index !== componentsData.navigation.length - 1">
              &nbsp;>&nbsp;
            </span>
          </li>
        </ul>
      </div>
    </div>
    <p class="describe">{{ componentsData.describe }}</p>
  </div>
</template>

<script setup>
import {reactive, defineProps, watch, computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const props = defineProps(['data'])
const componentsData = reactive({
  title: "",
  navigation: [],
  describe: ""
})

const getLanguageState = computed(() => {
  return store.state.LanguageState;
})
function changeLanguage(val) {
  if (val === 'ch') {
    componentsData.title = props.data.title.cn
    let list = [];
    props.data.navigation.forEach(item => {
      list.push({title: item.cn, link: item.link})
    })
    componentsData.navigation = list
    componentsData.describe = props.data.describe.cn
  } else {
    componentsData.title = props.data.title.en
    let list = [];
    props.data.navigation.forEach(item => {
      list.push({title: item.en, link: item.link})
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
#BreadNavigation {
  .titleBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cacfd5;

    span {
      font-size: 14px;
    }
  }
  .navList {
    display: flex;
    text-align: center;
    ul{
      display: flex;
      font-size: 14px;
      a{
        text-decoration: none;
        color: #4c4c4c;
        transition: all 0.3s;
        &:hover{
          color: #00C9A7;
          transition: all 0.3s;
        }
      }
    }
  }
  .describe {
    font-size: 16px;
    color: #666;
  }
}

@media only screen and (max-width: 770px) {
  #BreadNavigation {
    margin-top: 20px;

    .titleBox {
      display: flex;
      justify-content: end;

      h1 {
        display: none;
      }

    }
  }
}
</style>