<template>
  <!--招聘信息详情-->
  <div id="RecruitmentContainer" style="min-height: 500px">
    <div class="container">
      <div v-html="container.const"></div>
    </div>
  </div>
</template>

<script setup>
import {reactive, onMounted} from 'vue'
import {useRoute} from "vue-router";
import allInterfaces from "@/api/allInterfaces";

const route = useRoute();
let container = reactive({const: ""})
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