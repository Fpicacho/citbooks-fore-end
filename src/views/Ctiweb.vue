<template>
  <div id="Ctiweb">
    <!-- 线上书展 -->
    <RunBanner :data="RunBannerData" />
    <div class="container">
      <BreadNavigation :data="BreadNavigationData" />
    </div>
  </div>
</template>

<script setup>
import RunBanner from "@/components/RunBanner";
import BreadNavigation from "@/components/BreadNavigation";
import url from "@/assets/img/breadImg/shuzhanfuwu.jpg";

const RunBannerData = {
  imgUrl: url,
  title: {
    cn: "线上书展",
    en: "Online book fair",
  },
};
const BreadNavigationData = {
  title: {
    cn: "",
    en: "",
  },
  navigation: [
    {
      link: "/",
      cn: "首页",
      en: "Home",
    },
    {
      link: "/ctiweb",
      cn: "线上书展",
      en: "Book Fair Services",
    },
  ],
  describe: {
    cn: "",
    en: "",
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 20px auto;
  ._container {
    width: 986px;
    margin: 0 auto;
  }
}
</style>
