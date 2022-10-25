<template>
<div id="Cooperate">
  <!--  合作伙伴-->
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <div id="Partner">
      <ul>
        <li v-for="item in serveData.const" :key="item.id" class="wow flip">
          <img :src="item.imgUrl" alt="">
          <p>{{item.introduction}}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup>
import {reactive, onMounted, watch, computed} from 'vue'
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
import allInterfaces from "@/api/allInterfaces";
import img from '@/assets/img/breadImg/hezuohuoban.jpg'
const RunBannerData = {
  imgUrl: img,
  title: {
    cn: '合作伙伴',
    en: 'Partner'
  }
}
const BreadNavigationData={
  title:{
    cn:"合作伙伴",
    en:"Partner"
  },
  navigation:[
    {
      link:"/",
      cn:"首页",
      en:"Home"
    },
    {
      link:"/cooperate",
      cn:"合作伙伴",
      en:"Partner"
    },
  ],
  describe:{
    cn:"中科公司在经营中坚持走专业化、个性化和人性化的服务，为众多国内高校、科研院所、公共图书馆和企事业单位提供专业类外文研究资料和综合类图书资料。我公司与境外包括全部主流出版社在内的近千家出版机构有业务往来或建立了合作关系，合作伙伴遍布美国、英国、德国、法国、荷兰、澳大利亚、加拿大、瑞士、西班牙、新加坡等众多国家。（以下展示部分合作院校、公共图书馆、出版社LOGO，排名不分先后）",
    en:"Sinopec adheres to professional, personalized and humanized services in its business, and provides professional foreign language research materials and comprehensive books for many domestic universities, research institutes, public libraries, enterprises and institutions. Our company has business contacts or established cooperative relationships with nearly 1000 overseas publishing institutions, including all mainstream publishers. Our partners are located in the United States, the United Kingdom, Germany, France, the Netherlands, Australia, Canada, Switzerland, Spain, Singapore and many other countries. (The following shows the LOGO of some cooperative colleges, public libraries and publishing houses in no particular order)"
  }
}
const serveData = reactive({
  const: []
})
onMounted(()=>{
  allInterfaces.links({page:1,limit:1000}).then(res=>{
    serveData.const = res.data.data
  })
})
</script>

<style scoped lang="scss">
.container{
  width: 75%;
  margin: 0 auto;
}
#Partner{
  p{
    margin: 0;
    padding: 0;
    display: none;
  }
  ul{
    display: grid;
    grid-template-columns: repeat(auto-fill,45%);
    place-content: space-between space-between;
    padding: 20px 0;
    li{
      margin-bottom: 20px;
      position: relative;
      img{
        width: 100%;
        height: 80px;
        object-fit: contain;
      }
    }
  }
}


@media only screen and (min-width: 770px) {
  #Partner{
    ul{
      display: grid;
      grid-template-columns: repeat(auto-fill,15%);
      place-content: space-between space-between;
      padding: 20px 0;
      li{
        margin-bottom: 20px;
        position: relative;
        img{
          width: 100%;
          height: 80px;
          object-fit: contain;
        }
        p{
          position: absolute;
          font-size: 14px;
          padding: 5px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          top: 0;
          display: none;
          height: 100%;
          min-width: 100%;
        }
        &:hover{
          p{
            display: block;
          }
        }
      }
    }
  }
}
</style>