<template>
<div id="Cooperate">
  <!--  合作伙伴-->
  <RunBanner :data="RunBannerData"/>
  <div class="container">
    <BreadNavigation :data="BreadNavigationData"/>
    <div id="Partner">
      <ul>
        <li v-for="item in serveData" :key="item.id" class="wow flip">
          <img :src="item.img" alt="">
          <p>{{item.describe}}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup>
import RunBanner from '@/components/RunBanner'
import BreadNavigation from '@/components/BreadNavigation';
const RunBannerData = {
  imgUrl: 'http://www.chinawanda.com/static/images/tx_banner.jpg',
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
let serveData = [
  {id:1,img:'https://docs.alibabagroup.com/assets2/images/cn/global/logo_header.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:2,img:'https://www.tencent.com/img/index/tencent_logo.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:3,img:'https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:4,img:'https:///www.baidu.com/img/flexible/logo/pc/result.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:5,img:'http://www.chinawanda.com/static/images/logo_style.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:6,img:'https://img2.baidu.com/it/u=2416572543,1181469736&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=157',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:7,img:'https://img2.baidu.com/it/u=2738327552,2106498984&fm=253&fmt=auto&app=138&f=JPEG?w=775&h=500',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:8,img:'https://www.firefox.com.cn/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:1,img:'https://docs.alibabagroup.com/assets2/images/cn/global/logo_header.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:2,img:'https://www.tencent.com/img/index/tencent_logo.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:3,img:'https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:4,img:'https:///www.baidu.com/img/flexible/logo/pc/result.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:5,img:'http://www.chinawanda.com/static/images/logo_style.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:6,img:'https://img2.baidu.com/it/u=2416572543,1181469736&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=157',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:7,img:'https://img2.baidu.com/it/u=2738327552,2106498984&fm=253&fmt=auto&app=138&f=JPEG?w=775&h=500',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
  {id:8,img:'https://www.firefox.com.cn/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png',describe:'北冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也'},
]

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