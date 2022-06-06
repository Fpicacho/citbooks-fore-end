<template>
<p>文章详情页 文章id:{{route.query.id}}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>

</style>