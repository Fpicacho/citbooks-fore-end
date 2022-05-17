<!--切换语言按钮-->
<template>
  <div id="ChangeLanguageBtn" @click="changeLanguage">
    <NButton v-if="state.curLanguage === 'cn'">English</NButton>
    <NButton v-else>中文</NButton>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {useI18n} from 'vue-i18n'
import { NButton } from 'naive-ui'
const {locale} = useI18n()

const state = reactive({
  curLanguage: 'cn',
})

const changeLanguage = () => {
  state.curLanguage = state.curLanguage === 'cn' ? 'en' : 'cn'
  locale.value = state.curLanguage
}
</script>

<style scoped lang="scss" >
#ChangeLanguageBtn{
  .n-button{
    width: 100%;
    border: 0px;
  }

}
</style>
