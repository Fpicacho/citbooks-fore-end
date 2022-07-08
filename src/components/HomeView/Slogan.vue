<template>
<div id="Slogan">
  <p>{{$t('slogan')}}</p>
</div>
</template>

<script>
export default {
  name: "Slogan"
}
</script>

<style scoped lang="scss">
#Slogan{
  background: #fff;
  p{
    text-align: center;
    margin: 0;
    padding: 15px;
    font-size: 0.3rem;
    border-bottom: 5px solid #ea4335;
    color: #0086FF;
  }
}
</style>