<template>
  <!--版权页脚 src/components/Copyright.vue-->
  <div id="Copyright">
    <div class="container">
      <p>{{ $t("Copyright[0]") }}</p>
      <p>{{ $t("Copyright[1]") }} {{ props.footerData.data.RecordNo }}</p>
      <p>{{ $t("Copyright[4]") }} {{ props.footerData.data.RecordNos }}</p>
      <p>{{ $t("Copyright[2]") }}</p>
      <p>{{ $t("Copyright[3]") }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["footerData"]);
</script>

<style scoped lang="scss">
p {
  margin: 0 0 10px;
  padding: 0;
  color: #f9eaff;
}

#Copyright {
  background: #00c9a7;
  text-align: center;
  padding: 30px 16px;
  font-size: 12px;
}
</style>
