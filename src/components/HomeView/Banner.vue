<template>
  <div id="Banner" class="wow fadeIn">
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
  'http://218.94.19.14:8800/ctibooksystem//attachement_files/出版社活动图a4fcfae9-71a0-416d-9296-1c9f6b8118d6_thumb.jpg',
  'http://218.94.19.14:8800/ctibooksystem//attachement_files/publisher21e2bafae5-bcb8-4b4d-b20d-69333ac376bf_thumb.jpg',
  'http://218.94.19.14:8800/ctibooksystem//attachement_files/北京书展图片13fe67daa-f7e6-4306-8160-810fa0b5d406_thumb.png',
    'http://218.94.19.14:8800/ctibooksystem//attachement_files/印尼图片3b9409d48-8f51-4aa4-aa0e-9cff545c6b79_thumb.png'
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