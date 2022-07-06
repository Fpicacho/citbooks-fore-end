<template>
<p>文章详情页 文章id:{{route.query.id}}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from 'vue'
import test from '../api/test'
const route = useRoute();

onMounted(() => {
  test.test1({postId:1})
})
</script>

<style scoped>

</style>