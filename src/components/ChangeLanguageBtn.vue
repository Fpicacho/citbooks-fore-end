<template>
  <!--切换语言按钮 src/components/ChangeLanguageBtn.vue-->
  <div id="ChangeLanguageBtn" @click="changeLanguage">
    <NButton v-if="store.state.LanguageState === 'ch'">English</NButton>
    <NButton v-else>中文</NButton>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useI18n} from 'vue-i18n'
import {NButton} from 'naive-ui'

const {locale} = useI18n()
const store = useStore()

const changeLanguage = function () {
  store.commit('ChangeLanguageState')
  locale.value = store.state.LanguageState
}
</script>

<style scoped lang="scss">
#ChangeLanguageBtn {
  .n-button {
    width: 100%;
    border: 0;
  }
}
</style>