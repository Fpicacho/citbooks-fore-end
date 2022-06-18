<template>
  <div style="height:100px"></div>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button @click="toHome">返回首页</n-button>
    </template>
  </n-result>
  <div style="height:100px"></div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
function toHome() {
  router.push('/')
}
</script>
