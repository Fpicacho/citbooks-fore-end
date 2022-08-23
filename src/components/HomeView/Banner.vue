<template>
  <div id="Banner" class="wow fadeIn">
    <n-carousel autoplay draggable show-arrow>
      <img
          v-for="(item,index) in BannerList.const"
          :key="index"
          class="carousel-img"
          :src=item
          alt="null"/>

    </n-carousel>
  </div>
</template>

<script setup>
import {reactive,onMounted} from "vue";
import allInterfaces from '../../api/allInterfaces'

let BannerList = reactive({const:""})

onMounted(()=>{
  getBannerList()
})

function getBannerList() {
  allInterfaces.bannerList().then(res=>{
    BannerList.const = res.data.data
  })
}

</script>

<style scoped lang="scss">
#Banner {
  background: #fff;
  width: 80%;
  margin: 0 auto;
  height: 500px;
}

@media only screen and (max-width: 374px) {
  #Banner {
    margin: 0;
    width: 100%;
    height: 240px;
  }
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}

@media only screen and (min-width: 374px) and (max-width: 769px) {
    #Banner {
    margin: 0;
    width: 100%;
        height: 240px;
  }
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
  .n-carousel__dots {
    top: 10px;
  }
}

</style>