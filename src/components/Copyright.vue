<template>
  <!--版权页脚 src/components/Copyright.vue-->
  <div id="Copyright">
    <div class="container">
      <p>{{$t('Copyright[0]')}}</p>
      <p>{{$t('Copyright[1]')}}</p>
      <p>{{$t('Copyright[2]')}}</p>
      <p>{{$t('Copyright[3]')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style scoped lang="scss">
p {
  margin: 0 0 10px;
  padding: 0;
  color: #F9EAFF;
}

#Copyright {
  background: #00C9A7;
  text-align: center;
  padding: 30px 16px;
  font-size: 12px;
}
</style>