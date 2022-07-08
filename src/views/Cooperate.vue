<template>
<div id="Cooperate">
  <!--  合作伙伴-->
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <div id="Partner">
      <ul>
        <li v-for="item in serveData.const" :key="item.id" class="wow flip">
          <img :src="item.img" alt="">
          <p>{{item.describe}}</p>
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
      cn:"关于我们",
      en:"About us"
    },
    {
      link:"/cooperate",
      cn:"合作伙伴",
      en:"Partner"
    },
  ],
  describe:{
    cn:"随着公司不断地发展，中国科技资料进出口总公司的优质服务已延伸到更加宽广的领域， 我们获得了众多来自各行业企业的合作，以下展示部分合作伙伴的LOGO(排名不分先后):",
    en:"With the continuous development of the company, the high-quality service of China National Science and Technology Materials Import and Export Corporation has been extended to a wider field. We have obtained cooperation from many enterprises in various industries. The following shows the LOGO of some partners (in no particular order):"
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