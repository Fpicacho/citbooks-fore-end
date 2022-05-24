<template>
  <div id="Banner">
    <n-carousel autoplay draggable show-arrow>
      <img
          v-for="(item,index) in BannerList"
          :key="index"
          class="carousel-img"
          :src=item
          alt="null"/>

    </n-carousel>
  </div>
</template>

<script setup>
import {ref} from "vue";

const BannerList = ref([
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
])
</script>

<style scoped lang="scss">
@media only screen and (max-width: 374px) {
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}

@media only screen and (min-width: 770px) {
  .carousel-img {
    width: 100%;
    height: 590px;
    object-fit: cover;
  }
  .n-carousel__dots{
    top: 10px;
  }
}

</style>