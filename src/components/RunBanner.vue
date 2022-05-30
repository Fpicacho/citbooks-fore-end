<template>
  <div id="RunBanner" class="wow fadeIn">
    <div class="runBanner">
      <img :src="data.imgUrl" alt="">
      <div class="textBox">
        <h1 class="wow bounceInLeft">{{ data.title.cn }}</h1>
        <p class="wow bounceInRight">{{ data.title.en }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  data: {
    type: Object,
  }
})
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}
@-webkit-keyframes scale_b {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
  }
}
@-moz-keyframes scale_b {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
  }
}
@-o-keyframes scale_b {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(2);
    -moz-transform: scale(2);
    -ms-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
  }
}
.runBanner {
  height: 150px;
  color: #fff;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: scale_b 25s linear infinite alternate;
  }

  .textBox {
    position: absolute;
    bottom: 20px;
    left: 16px;

  }
}


@media only screen and (min-width: 770px) {
  .runBanner {
    height: 300px;

    .textBox {
      left: 80px;
    }
  }
}
</style>